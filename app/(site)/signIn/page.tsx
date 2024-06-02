import Link from "next/link";

import { Form } from "@/lib/form";
import { ActionResult } from "@/lib/form";

import SubmitButton from "../components/button";

export default async function SignInPage() {
  return (
    <div className="flex flex-col items-center pt-20 py-5  md:px-36 text-sm text-chocolate">
      <div className="flex flex-col gap-6 p-10 shadow-lg w-full">
        <section>
          <h1 className="font-semibold text-2xl">Sign In</h1>
          <p>Welcome back! Ready to make another purchase?</p>
        </section>
        <Form
          action={async (
            prevState: any,
            formData: FormData
          ): Promise<ActionResult> => {
            "use server";
            const signInServerAction = (
              await import("../../../actions/sign-in")
            ).default;
            return await signInServerAction(prevState, formData);
          }}
          className="flex flex-col gap-3 w-full"
        >
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
          <SubmitButton
            type="submit"
            text="Submit"
            className="w-full flex items-center justify-center gap-3 py-2 border-2 border-chocolate"
          />
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
          data is being saved in the website or in any third party systems. For
          more information, please refer to our{" "}
          <span className="text-blue-500 underline">about </span>
          page or directly{" "}
          <span className="text-blue-500 underline">contact </span> us at Crepe
          Bites.
        </p>
      </div>
    </div>
  );
}
