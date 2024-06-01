"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const SendCode = dynamic(() => import("../components/send-code"), { ssr: false })

export default function EmailCode() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">Email</p>
      <section className="flex w-full gap-6">
        <div className="flex flex-col gap-1 basis-[85%]">
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required={false}
            className="border-2 border-neutral-200 px-4 py-2 focus:outline-none"
            placeholder="youremail@gmail.com"
          />
        </div>
        <SendCode email={email} setMessage={setMessage}/>
        <p> {message} </p>
      </section>
    </div>
  );
}
