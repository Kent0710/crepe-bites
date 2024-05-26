import Image from "next/image";
import crepebitesbackdrop from "@/public/crepebitesbackdrop.jpg";

import { ShoppingCart } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import { CircleAlert } from "lucide-react";

export default async function OrderPage() {
  return (
    <div className="flex flex-col items-center pt-20 py-5  md:px-36 text-sm text-chocolate">
      <div className="flex flex-col gap-6 p-10 shadow-lg w-full">
        <section>
          <h1 className="font-semibold text-2xl">Products Ordered</h1>
          <p>Before checking out, please review our terms and conditions.</p>
        </section>
        <section className="flex gap-3 items-center border-t-2 border-chocolate pt-6">
          <Image
            src={crepebitesbackdrop}
            alt="crepebitesbackdrop"
            className="w-14"
          />
          <section>
            <h4 className="text-xl font-semibold">Fruipe</h4>
            <p>
              A malunggay crepe infused with mango jam filling and a drizzle of
              chocolate syrup.
            </p>
          </section>
        </section>
        <form className="flex flex-col gap-3">
          <section>
            <h4 className="text-xl font-semibold">Check out form</h4>
            <p>Please fill out this form with necessary information.</p>
          </section>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Email</p>
            <input
              type="email"
              className="border-2 border-neutral-200 px-4 py-2 focus:outline-none"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Name</p>
            <input
              type="text"
              className="border-2 border-neutral-200 px-4 py-2 focus:outline-none"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Time</p>
            <input
              type="time"
              className="border-2 border-neutral-200 w-full px-4 py-2 focus:outline-none"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Message</p>
            <textarea
              className="resize-none border-2 border-neutral-200 px-4 py-2 focus:outline-none"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" className="" />
            <p>Use <span className="text-blue-500 underline">code points</span> on check out.</p>
          </div>
          <div className="flex justify-between items-center">
            <section className="flex flex-col gap-1">
              <p className="font-semibold">Quantity:</p>
              <div className="flex gap-3 items-center border-2 bg-chocolate text-white px-4 py-1">
                <Plus className="w-4" />
                <p className="font-semibold">0</p>
                <Minus className="w-4" />
              </div>
            </section>
            <p>Total Price: PHP 40.00</p>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-2 border-2 border-chocolate"
          >
            <ShoppingCart className="w-4" />
            Check out
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-6 p-10 w-full">
        <section>
          <h1 className="font-semibold text-2xl">Your Invoice</h1>
          <p>
            Please take a screenshot of this and present it to the counter on
            claiming. The payment will also be settled at the venue.
          </p>
        </section>
        <div className="flex flex-col items-center">
          <p>Your order number is</p>
          <p className="text-7xl font-semibold">01</p>
          <p className="font-semibold text-xl">Order ID: AM248ABEK3829I</p>
        </div>
        <button className="bg-navy text-yellow-400 flex gap-3 place-self-center px-20 justify-center items-center py-2">
          <ShoppingCart className="w-4" />
          Buy Again
        </button>
        <ul className="flex flex-col gap-3 list-disc list-inside">
          <div className="flex items-center gap-3">
            <CircleAlert className="w-4" />
            <p className="font-semibold text-xl">Reminders.</p>
          </div>
          <li>Claim your order at NU Lipa 6th Floor Gymnasium.</li>
          <li>Settle the payment at the venue.</li>
          <li>
            Show up within your given timeframe (9:00 AM - 9:30 AM). Failure to
            do so will result in void order.
          </li>
          <li>Message us at crepebites@gmail.com for any concerns.</li>
        </ul>
      </div>
    </div>
  );
}
