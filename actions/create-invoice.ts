"use server";

import client from "@/lib/db";
import { redirect } from "next/navigation";

export default async function createInvoice(
  _: any,
  userId: string,
  formData: FormData
) {
  let newOrder;

  try {
    // get the user
    const user = await client.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user)
      return {
        error: "Unauthorized",
      };

    // form validation

    // check whether use points is valid
    const rawUseCodePoints = formData.get("useCodePoints");
    const useCodePoints = rawUseCodePoints === "on" ? true : false;
    if (useCodePoints && user.codePoints !== 5) {
        return {
          error: "Not enough points.",
      }
    }

    // check wheter the attempt is valid
    if (user.codeAttempts === 5) {
      return {
        error: "Attempts reached.",
      };
    }

    // check if the verification code is the same
    const rawVerificationCode = formData.get("verificationCode");
    if (
      typeof rawVerificationCode !== "string" ||
      rawVerificationCode.length !== 6
    ) {
      return {
        error: "Invalid verification code",
      };
    }

    if (rawVerificationCode !== user.orderCode) {
      const updateAttempts = await client.user.update({
        where: {
          id: userId,
        },
        data: {
          codeAttempts: {
            increment: 1,
          },
        },
      });

      return {
        error: `Verification code is not the same. Attempts : ${updateAttempts.codeAttempts}`,
      };
    }

    // everything is good
    const rawFormData = {
      time: formData.get("orderDateTime"),
      message: formData.get("message") || "",
    };

    if (!rawFormData.time) {
      return {
        error: "Time does not exist.",
      };
    }

    // format the date
    const currentDate = new Date().toISOString().split("T")[0];
    const isoDateTime = `${currentDate}T${rawFormData.time}:00Z`;

    // create to the database
    newOrder = await client.order.create({
      data: {
        claimTime: isoDateTime,
        message: rawFormData.message.toString(),
        orderNumber: 3,
        userId: userId,
        useCodePoints: useCodePoints,
      },
    });

    // clear everything
    const clearOrderCode = await client.user.update({
      where: {
        id: userId,
      },
      data: {
        orderCode: "",
        codeAttempts: 0,
        codeExpiration: new Date(),
      },
    });

    // everything succeeded, redirect
  } catch (e) {
    console.log("Error on creating the invoice from the server: ", e);
    return {
      error:
        "Unknown error occured. Please see your history if the order succeeded. If not, please refresh the page and try again.",
    };
  }
  redirect(`/order/${newOrder?.id}`);
}
