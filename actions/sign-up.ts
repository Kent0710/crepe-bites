'use server'

import client from "@/lib/db";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia } from "@/lib/lucia";
import { redirect } from "next/navigation";
import { ActionResult } from "@/lib/form";
import { TimeSpan } from "oslo";

export default async function signup(_: any, formData: FormData): Promise<ActionResult> {
    "use server";
    const username = formData.get("username");
    // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
    if (
      typeof username !== "string" ||
      username.length < 3 ||
      username.length > 31 ||
      !/^[a-zA-Z0-9 _-]+$/.test(username)
    ) {
      return {
        error: "Invalid username",
      };
    }
    const password = formData.get("password");
    if (
      typeof password !== "string" ||
      password.length < 6 ||
      password.length > 255
    ) {
      return {
        error: "Invalid password",
      };
    }
  
    const hashedPassword = await new Argon2id().hash(password);
    const d = new Date();
  
    try {
      const newUser = await client.user.create({
        data: {
          username: username,
          password: hashedPassword,
          codePoints : 0,
          alreadyRedeem : false
        },
      });

    //   const session = await lucia.createSession(newUser.id, {});
      const timespan = new TimeSpan(30, "d")
      const expiresAt = new Date(Date.now() + timespan.milliseconds())

      const newSession = await client.session.create({
        data : {
            userId : newUser.id,
            expiresAt : expiresAt
        }
      })

      const session = {
        id: newSession.id,
        userId : newUser.id,
        fresh: true,
        expiresAt: expiresAt,
    };
  
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    } catch (e) {
      return {
        error: "An unknown error occurred.",
      };
    }
    redirect("/");
  }
  