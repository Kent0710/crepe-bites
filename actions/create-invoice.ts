"use server";

// import client from "@/lib/db";
// import { redirect } from "next/navigation";

// import { alphabet, generateRandomString } from "@/lib/utils";

export default async function createInvoice(
  _: any,
  userId: string,
  formData: FormData
) {
  // let newOrder, updateRedeem;

  try {
    return {
      error : "Sold out. Thank you Nationalian!"
    }

    // get the user
    // const user = await client.user.findUnique({
    //   where: {
    //     id: userId,
    //   },
    // });
    // if (!user)
    //   return {
    //     error: "Unauthorized",
    //   };

    // // form validation

    // // check whether use points is valid
    // const rawUseCodePoints = formData.get("useCodePoints");
    // const useCodePoints = rawUseCodePoints === "on" ? true : false;
    // if (useCodePoints && user.codePoints !== 5) {
    //   return {
    //     error: "Not enough points.",
    //   };
    // }

    // if (useCodePoints && user.alreadyRedeem) {
    //   return {
    //     error : "Free box already redeemed. Please do not toggle the use code points"
    //   }
    // }

    // let redeem = false;
    // if (useCodePoints && user.codePoints === 5) {
    //   redeem = true;
    // }

    // // everything is good
    // const rawFormData = {
    //   time: formData.get("orderDateTime"),
    //   message: formData.get("message") || "",
    //   section: formData.get("section"),
    // };

    // if (!rawFormData.time) {
    //   return {
    //     error: "Time does not exist.",
    //   };
    // }

    // if (
    //   typeof rawFormData.section !== "string" ||
    //   rawFormData.section === undefined ||
    //   rawFormData.section === ""
    // ) {
    //   return {
    //     error: "Invalid section",
    //   };
    // }

    // // format the date
    // const currentDate = new Date().toISOString().split("T")[0];
    // const isoDateTime = `${currentDate}T${rawFormData.time}:00Z`;

    // const orderNumber = generateRandomString(4, alphabet("0-9"));

    // if (redeem) {
    //   [newOrder, updateRedeem] = await client.$transaction([
    //     client.order.create({
    //       data: {
    //         claimTime: isoDateTime,
    //         message: rawFormData.message.toString(),
    //         section: rawFormData.section,
    //         orderNumber: parseInt(orderNumber),
    //         userId: userId,
    //         useCodePoints: useCodePoints,
    //       },
    //     }),
    //     client.user.update({
    //       where: {
    //         id: userId,
    //       },
    //       data: {
    //         alreadyRedeem: true,
    //       },
    //     }),
    //   ]);
    // } else {
    //   [newOrder, updateRedeem] = await client.$transaction([
    //     client.order.create({
    //       data: {
    //         claimTime: isoDateTime,
    //         message: rawFormData.message.toString(),
    //         section: rawFormData.section,
    //         orderNumber: parseInt(orderNumber),
    //         userId: userId,
    //         useCodePoints: useCodePoints,
    //       },
    //     }),
    //     client.user.update({
    //       where: {
    //         id: userId,
    //       },
    //       data: {
    //         codePoints : {
    //           increment : 1,
    //         }
    //       },
    //     }),
    //   ]);
    // }
  } catch (e) {
    return {
      error:
        "Unknown error occured. Please see your history if the order succeeded. If not, please refresh the page and try again.",
    };
  }

  // redirect(`/order/${newOrder.id}`);
}
