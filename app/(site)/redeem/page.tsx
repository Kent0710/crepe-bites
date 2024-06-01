import Link from "next/link";
import { redirect } from "next/navigation";

import { TicketPercent } from "lucide-react";
import { Send } from "lucide-react";

import { validateRequest } from "@/lib/lucia";
import { ActionResult, Form } from "@/lib/form";

import { Suspense } from "react";

export default async function RedeemPage() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/signUp");
  }

  return (
    <Suspense fallback={<p>loading</p>}>
      <div className="flex flex-col items-center pt-20 py-5 md:px-36  text-sm text-chocolate">
        <div className="flex flex-col gap-6 p-10 w-full">
          <section>
            <h1 className="font-semibold text-2xl">Redeem Points</h1>
            <p>
              Redeem enough points and get the oppurtunity to claim a free
              Fruipe box.
            </p>
          </section>
          <section className="flex flex-col items-center">
            <small>Your points:</small>
            <p className="font-semibold text-7xl"> {user.codePoints} </p>
          </section>
          <Form
            action={async (
              prevState: any,
              formData: FormData
            ): Promise<ActionResult> => {
              "use server";
              const redeemCodeServerAction = (
                await import("../../../actions/redeem-code")
              ).default;
              return await redeemCodeServerAction(prevState, user.id, formData);
            }}
            className="flex flex-col items-center gap-3"
          >
            <section className="flex flex-col items-center">
              <h4 className="font-semibold text-xl">Enter code</h4>
              <p>Please enter the ten characters code from your box.</p>
            </section>
            <input
              required={true}
              autoComplete="false"
              type="text"
              className="w-full border-2 border-neutral-200 px-4 py-2 focus:outline-none"
              placeholder="Ten characters code goes here..."
              name="codePoints"
              id="codePoints"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-2 border-2 border-chocolate"
            >
              <TicketPercent className="w-4" />
              Redeem point
            </button>
            <p>
              Already accumulated 5 points? Refer to the step by step below for
              the process.{" "}
            </p>
          </Form>
        </div>
        <div className="flex flex-col gap-6 p-10 w-full">
          <section>
            <h4 className="font-semibold text-xl">How it works</h4>
            <p>
              Refer to this step by step guide on redeeming and claiming your
              free Fruipe box.
            </p>
          </section>
          <ul className="flex flex-col gap-3 list-disc list-inside">
            <li>Enter the code above.</li>
            <li>
              Accumulate 5 points and go to{" "}
              <Link href="/order" className="text-blue-500 underline">
                order
              </Link>{" "}
              page.
            </li>
            <li>Fill up the form and toggle the checkbox to use points.</li>
            <li>Wait and save your invoice.</li>
          </ul>
        </div>
        {/* <div className="flex flex-col gap-6 p-10 w-full"> */}
          <Form
            className="flex flex-col gap-3 w-full p-10"
            action={async (
              prevState: any,
              formData: FormData
            ): Promise<ActionResult> => {
              "use server";
              const sendMessageServerAction = (
                await import("../../../actions/send-message")
              ).default;
              return await sendMessageServerAction(
                prevState,
                user?.id,
                formData
              );
            }}
          >
            <section>
              <h4 className="font-semibold text-xl">Redeem Error</h4>
              <p>
                Can not redeem your code? Send us a message and we will get back
                to you right away.
              </p>
            </section>
            <div className="flex flex-col gap-1">
              <p className="font-semibold opacity-80">
                Content{" "}
                <span className="font-normal italic">
                  (minimum of 10 characters and maximum of 100 characters)
                </span>{" "}
              </p>
              <textarea
                required={true}
                maxLength={100}
                minLength={10}
                id="content"
                name="content"
                className="resize-none w-full px-4 py-2 rounded-md focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex w-full justify-center items-center font-semibold gap-3 bg-yellow-400 text-navy  px-10 py-2"
            >
              <Send className="w-4" />
              Send form
            </button>
          </Form>
      </div>
    </Suspense>
  );
}
