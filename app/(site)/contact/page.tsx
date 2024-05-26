import { Send } from "lucide-react";

export default async function ContactPage() {
  return (
    <div className="flex flex-col items-center pt-20 py-5  md:px-36  text-sm text-chocolate">
      <div className="flex flex-col gap-6 p-10 shadow-lg w-full">
        <section>
          <h1 className="font-semibold text-2xl">Contact Us Directly</h1>
          <p>
            Reach out for any inquires or concerns directly or through our
            socials.
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
            <p className="font-semibold">Message</p>
            <textarea
              className="resize-none w-full border-2 border-neutral-200 px-4 py-2 focus:outline-none"
              placeholder="namikazii nakiri"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 py-2 border-2 border-chocolate"
          >
            <Send className="w-4" />
            Send message
          </button>
        </form>
        <section className="flex justify-around items-center flex-wrap gap-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7721.816015183949!2d120.99462900000002!3d14.604316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9fc11a6ceb3%3A0x9d4220dade0140ab!2sNational%20University-Manila!5e0!3m2!1sen!2sus!4v1716605774051!5m2!1sen!2sus"
            width="500"
            height="350"
            allowfullscreen=""
            loading="lazy"
            className="rounded-md"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex flex-col gap-6">
            <section>
              <h4 className="font-semibold text-xl">Crepe Bites</h4>
              <p>SM City Lipa, Ayala Highway, 4217, Lipa City, Philippines</p>
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
              <li>
                <p className="font-semibold">Facebook Page</p>
                www.facebook.com/crepebites
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
