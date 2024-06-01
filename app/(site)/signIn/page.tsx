import Link from "next/link";

import  db from "@/lib/db";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia } from "@/lib/lucia";
import { redirect } from "next/navigation";
import { Form } from "@/lib/form";

import type { DatabaseUser } from "@/lib/db";
import type { ActionResult } from "@/lib/form";
import client from "@/lib/db";

export default async function SignInPage() {
  return (
    <div className="flex flex-col items-center pt-20 py-5  md:px-36 text-sm text-chocolate">
      <div className="flex flex-col gap-6 p-10 shadow-lg w-full">
        <section>
          <h1 className="font-semibold text-2xl">Sign In</h1>
          <p>
            Welcome back! Ready to make another purchase?
          </p>
        </section>
        <Form action={login} className="flex flex-col gap-3 w-full">
          <section>
            <p className="font-semibold">Username</p>
            <input
              name="username"
              id="username"
              className="border-2 border-neutral-200 w-full px-4 py-2 focus:outline-none"
            />
          </section>
          <section>
            <p className="font-semibold">Password</p>
            <input
              type="password"
              autoComplete="false"
              name="password"
              id="password"
              className="border-2 border-neutral-200 w-full px-4 py-2 focus:outline-none"
            />
          </section>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-2 border-2 border-chocolate"
          >
            Proceed
          </button>
          <p>
            Already have an account?{" "}
            <Link href="/signUp" className="text-blue-500 underline">
              Sign Up
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

async function login(_: any, formData: FormData): Promise<ActionResult> {
	"use server";
	const username = formData.get("username");
	if (
		typeof username !== "string" ||
		username.length < 3 ||
		username.length > 31 ||
		!/^[a-z0-9_-]+$/.test(username)
	) {
		return {
			error: "Invalid username"
		};
	}
	const password = formData.get("password");
	if (typeof password !== "string" || password.length < 6 || password.length > 255) {
		return {
			error: "Invalid password"
		};
	}

    // check if the user exists in the database
    const existingUser = await client.user.findUnique({
        where : {
            username : username
        }
    });

    if (!existingUser) {
        return {
            error : "Incorrect username or password"
        }
    }

	const validPassword = await new Argon2id().verify(existingUser.password, password);
	if (!validPassword) {
		return {
			error: "Incorrect username or password"
		};
	}

	const session = await lucia.createSession(existingUser.id, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/");
}

