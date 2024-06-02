import Image from "next/image";
import crepebitesbox from "@/public/crepebitesbox.jpg"

import { Suspense } from "react";

import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

import { validateRequest } from "@/lib/lucia";
import { ActionResult, Form } from "@/lib/form";

const SubmitButton = dynamic(() => import("../components/button"), {ssr : false})

export default async function OrderPage() {
  const { user, session } = await validateRequest();
  if (!session) {
    redirect("/signUp")
  }

  return (
    <Suspense
      fallback={<p className="pt-20 text-chocolate">Loading feed...</p>}
    >
      <div className="flex flex-col items-center pt-20 py-5  md:px-36 text-sm text-chocolate">
        <div className="flex flex-col gap-6 p-10 w-full">
          <section>
            <h1 className="font-semibold text-2xl">Products Ordered</h1>
            <p>Before checking out, please review our terms and conditions.</p>
          </section>
          <section className="flex gap-3 items-center border-t-2 border-chocolate pt-6">
            <Image
              src={crepebitesbox}
              alt="crepebitesbox"
              width={50}
            />
            <section>
              <h4 className="text-xl font-semibold">Fruipe</h4>
              <p>
                A malunggay crepe infused with mango jam filling and a drizzle
                of chocolate syrup.
              </p>
              <p>
                Price: PHP 35.00 (only on our website)
              </p>
            </section>
          </section>
          <Form 
            className="flex flex-col gap-3" 
            action={async (
              prevState: any,
              formData: FormData
            ) : Promise<ActionResult> => {
              'use server'
              const createInvoiceServerAction = (await import('../../../actions/create-invoice')).default;
              return await createInvoiceServerAction(prevState, user.id, formData);
          }}>
            <section>
              <h4 className="text-xl font-semibold">Check out form</h4>
              <p>Please fill out this form with necessary information.</p>
            </section>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Grade and Section or Department</p>
              <input
                type="text"
                name="section"
                required={true}
                id="section"
                className="border-2 border-neutral-200 px-4 py-2 focus:outline-none"
                placeholder="your grade and section here"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Time to claim (claim within 10 minutes from your set time) </p>
              <input
                type="time"
                name="orderDateTime"
                required={true}
                id="orderDateTime"
                className="border-2 border-neutral-200 w-full px-4 py-2 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Message</p>
              <textarea
                id="message"
                name="message"
                className="resize-none border-2 border-neutral-200 px-4 py-2 focus:outline-none"
                placeholder="your message here..."
              />
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" className="" name="useCodePoints" id="useCodePoints"  />
              <p>
                Use <span className="text-blue-500 underline">code points</span>{" "}
                on check out. <span className="text-blue-500 font-semibold">Available points: {user.codePoints} </span> 
              </p>
            </div>
            <p>Gain 1 point per check out. Accumulate a total of 5 points for a free box then toggle the checkbox above.</p>
            <SubmitButton 
              className="w-full flex items-center justify-center gap-3 py-2 border-2 border-chocolate"
              type="submit"
              text="Create invoice"
              loadingText="Creating invoice..."
            />
          </Form>
        </div>
      </div>
    </Suspense>
  );
}
