"use server";

import { Resend } from "resend";
import { EmailTemplate } from "./app/(site)/components/email-template";
import { revalidatePath } from "next/cache";

const resend = new Resend(process.env.RESEND_API_KEY);

import client from "./lib/db";

import { generateRandomString } from "./lib/utils";
import { alphabet } from "./lib/utils";

import { checkIf15MinutesHavePassed } from "./lib/utils";

export async function resendHandler(email : string, userId : string, codeExpiration : Date, userCode : string) {
  try {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = re.test(String(email).toLowerCase());

    if (!isEmailValid || email === "" || email.length > 50) {
      return {
        message : "Invalid email"
      }
    }
    
    if (userCode !== "") {
      console.log("not undefined")
      const codeRequestValid = checkIf15MinutesHavePassed(codeExpiration);
      if (codeRequestValid) {
        return {
          message : "15 minutes for next code"
        }
      }
    }

    const code = generateRandomString(6, alphabet("0-9", "A-Z"));
    
    // set code expiration to 15 minutes from now
    const currentDateTime = new Date();
    currentDateTime.setMinutes(currentDateTime.getMinutes() + 15);
    const isoDateTime = currentDateTime.toISOString();

    const user = await client.user.update({
      where : {
        id : userId
      },
      data : {
        orderCode : code,
        codeExpiration : isoDateTime,
      }
    })

    revalidatePath("/order")
    
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Your verification code is: " + code,
      react: EmailTemplate({ code: code }),
      text: "This is the text",
    });

    console.log(data);
  } catch (error) {
    return {
      message : "Unknkown error occured. Please refresh the page and try again."
    }
  }
}

