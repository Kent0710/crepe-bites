import Link from "next/link";

import { CircleAlert } from "lucide-react";

import client from "@/lib/db";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia, validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";
import { Form } from "@/lib/form";

import type { ActionResult } from "@/lib/form";

export default async function SignUpPage() {
  return (
    <div className="flex flex-col items-center pt-20 py-5  md:px-36 text-sm text-chocolate">
      <div className="flex flex-col gap-6 p-10 shadow-lg w-full">
        <section>
          <h1 className="font-semibold text-2xl">Create an account</h1>
          <p>
            Please read how we{" "}
            <span className="text-blue-500 underline">store</span> your data.
          </p>
        </section>
        <Form action={signup} className="flex flex-col gap-3 w-full">
          <section>
            <p className="font-semibold">Username</p>
            <input
              name="username"
              id="username"
              className="border-2 border-neutral-200 w-full px-4 py-2 focus:outline-none"
              placeholder="4 characters and above"
            />
          </section>
          <section>
            <p className="font-semibold">Password</p>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 border-neutral-200 w-full px-4 py-2 focus:outline-none"
              placeholder="6 characters and above"
            />
          </section>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-2 border-2 border-chocolate"
          >
            Create
          </button>
          <p>
            Already have an account?{" "}
            <Link href="/signIn" className="text-blue-500 underline">
              Sign In
            </Link>
          </p>
        </Form>
      </div>
      <div className="p-10 w-full">
        <h4 className="text-xl font-semibold">How do we store your data?</h4>
        <p>
          We only store the username and password you have given us. No external
          data is being saved in the website or in any third party systems.
          Please take note that for every order, we will be asking for your{" "}
          <span className="text-blue-500 font-semibold">email </span>
          to verify that you are a human,{" "}
          <span className="text-red-500 font-semibold">we will not </span> store
          this email in our website or in any third party systems. For more
          information, please refer to our{" "}
          <span className="text-blue-500 underline">about </span>
          page or directly{" "}
          <span className="text-blue-500 underline">contact </span> us at Crepe
          Bites.
        </p>
      </div>
    </div>
  );
}

async function signup(_: any, formData: FormData): Promise<ActionResult> {
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
