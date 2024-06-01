'use server'

import client from "@/lib/db";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia } from "@/lib/lucia";
import { redirect } from "next/navigation";
import { ActionResult } from "@/lib/form";

export default async function signup(_: any, formData: FormData): Promise<ActionResult> {
    "use server";
    const username = formData.get("username");
    // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
    if (
      typeof username !== "string" ||
      username.length < 3 ||
      username.length > 31 ||
      !/^[a-z0-9_-]+$/.test(username)
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
          orderCode : "",
          codeAttempts : 0,
          codeExpiration : d,
          codePoints : 0,
        },
      });
  
      const session = await lucia.createSession(newUser.id, {});
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
    return redirect("/");
  }
  