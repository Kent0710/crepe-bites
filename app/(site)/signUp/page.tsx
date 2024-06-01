import Link from "next/link";
import { Form } from "@/lib/form";

import signup from "@/actions/sign-up";

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
              placeholder="4 characters and above. Text and numbers only. No spacing"
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
