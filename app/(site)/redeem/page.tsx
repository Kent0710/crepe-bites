import { TicketPercent } from "lucide-react";
import { Send } from "lucide-react";

export default async function RedeemPage() {
  return (
    <div className="flex flex-col items-center pt-20 py-5 md:px-36  text-sm text-chocolate">
      <div className="flex flex-col gap-6 p-10 shadow-lg w-full">
        <section>
          <h1 className="font-semibold text-2xl">Redeem Points</h1>
          <p>
            Redeem enough points and get the oppurtunity to claim a free Fruipe
            box.
          </p>
        </section>
        <section className="flex flex-col items-center">
          <small>Your points:</small>
          <p className="font-semibold text-7xl">5</p>
        </section>
        <section className="flex flex-col items-center gap-3">
          <section className="flex flex-col items-center">
            <h4 className="font-semibold text-xl">Enter code</h4>
            <p>Please enter the ten characters code from your box.</p>
          </section>
          <input
            type="text"
            className="w-full border-2 border-neutral-200 px-4 py-2 focus:outline-none"
            placeholder="Ten characters code goes here..."
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-2 border-2 border-chocolate"
          >
            <TicketPercent className="w-4" />
            Check out
          </button>
          <p className="text-red-500 font-semibold">
            Code does not exist. Try again.
          </p>
        </section>
      </div>
      <div className="flex flex-col gap-6 p-10 w-full">
        <section>
          <h4 className="font-semibold text-xl">Redeem Error</h4>
          <p>
            Can not redeem your code? Send us a message and we will get back to
            you right away.
          </p>
        </section>
        <form action="" className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Name</p>
            <input
              type="text"
              className="w-full border-2 border-neutral-200 px-4 py-2 focus:outline-none"
              placeholder="namikazii nakiri"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Code</p>
            <input
              type="text"
              className="w-full border-2 border-neutral-200 px-4 py-2 focus:outline-none"
              maxLength={10}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Message</p>
            <textarea className="resize-none w-full border-2 border-neutral-200 px-4 py-2 focus:outline-none" />
          </div>
          <button type="submit" className="bg-navy text-yellow-400 flex gap-3 place-self-center px-20 justify-center items-center py-2">
            <Send className="w-4" />
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}
