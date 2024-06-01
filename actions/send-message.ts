"use server";

import client from "@/lib/db";

export default async function sendMessage(
  _: any,
  userId: string | undefined,
  formData: FormData
) {
  try {
    // form validation
    if (userId === undefined) {
        return {
            error : "Sign up before sending a message."
        }
    }

    const rawContent = formData.get('content');
    if (typeof rawContent !== 'string' || rawContent.length > 100) {
        return {
            error : "Invalid content"
        }
    };

    // get the datetime now
    const date = new Date();

    const newMessage = await client.message.create({
        data : {
            content : rawContent,
            date : date,
            userId : userId
        }
    });

    // everything succeeded
    return {
        error : "Message sent successfully."
    }
  } catch (e) {
    return {
      error:
        "Unknown error occured. Please refresh the page and try again or directly send an email at crepebites@gmail.com.",
    };
  }
}
