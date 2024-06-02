'use server'

import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia } from "@/lib/lucia";
import { redirect } from "next/navigation";
import { ActionResult } from "@/lib/form";
import client from "@/lib/db";
import { TimeSpan } from "lucia";

export default async function signIn(_: any, formData: FormData): Promise<ActionResult> {
    "use server";
    const username = formData.get("username");
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
  
    // check if the user exists in the database
    const existingUser = await client.user.findUnique({
      where: {
        username: username,
      },
    });
  
    if (!existingUser) {
      return {
        error: "Incorrect username or password",
      };
    }
  
    const validPassword = await new Argon2id().verify(
      existingUser.password,
      password
    );
    if (!validPassword) {
      return {
        error: "Incorrect username or password",
      };
    }
  
    const timespan = new TimeSpan(30, "d")
    const expiresAt = new Date(Date.now() + timespan.milliseconds())

    const newSession = await client.session.create({
      data : {
          userId : existingUser.id,
          expiresAt : expiresAt
      }
    })

    const session = {
      id: newSession.id,
      userId : existingUser.id,
      fresh: true,
      expiresAt: expiresAt,
  };

    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    redirect("/");
  }
  