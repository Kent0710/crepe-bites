import { Send } from "lucide-react";

import { Suspense } from "react";

import { ActionResult, Form } from "@/lib/form";
import { validateRequest } from "@/lib/lucia";

import SubmitButton from "../components/button";

export default async function ContactPage() {
  const {user} = await validateRequest();
  
  return (
    <Suspense fallback={<p className="pt-20">Loading feed...</p>}>
      <div className="flex flex-col items-center pt-20 py-5  md:px-36  text-sm text-chocolate">
        <div className="flex flex-col gap-6 p-10 w-full">
          <section>
            <h1 className="font-semibold text-2xl">Contact Us Directly</h1>
            <p>
              Reach out for any inquires or concerns directly or through our
              socials.
            </p>
          </section>
          <Form
            className="flex flex-col gap-3 w-full"
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
            <SubmitButton 
              type="submit"
              className="flex w-full justify-center items-center font-semibold gap-3 bg-yellow-400 text-navy  px-10 py-2"
              text="Send form"
              loadingText="Sending message..."
            />
            {/* <button
              type="submit"
              className="flex w-full justify-center items-center font-semibold gap-3 bg-yellow-400 text-navy  px-10 py-2"
            >
              <Send className="w-4" />
              Send form
            </button> */}
          </Form>
          <div className="flex flex-col gap-6">
            <section>
              <h4 className="font-semibold text-xl">Crepe Bites</h4>
              <p>Ayala Highway, Lipa City, Philippines</p>
            </section>
            <ul className="flex flex-col gap-3">
              <li>
                <p className="font-semibold">Email Address</p>
                crepebites@gmail.com
              </li>
              <li>
                <p className="font-semibold">Contact Number</p>
                0129-421-5903
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
