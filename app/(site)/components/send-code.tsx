'use client'

import { useSession } from "@/providers/SessionProvider";
import { useState } from "react";

interface SendCodeProps {
  email : string;
  setMessage : any;
}

const SendCode : React.FC<SendCodeProps> = ({
  email,
  setMessage
}) => {
  const {user} = useSession();

  const [label, setLabel] = useState("Send Code");

  if (!user) {
    return (
      <p>Unauthorized</p>
    )
  }

  return (
    <button
      type="button"
      disabled={label === "Code Sent"}
      className=" bg-chocolate text-white px-4 py-2  basis-[15%]"
      onClick={async () => {
        const resendHandler = (await import('../../../_actions')).resendHandler;
        await resendHandler(email, user.id, user.codeExpiration, user.orderCode).then((res)=>{
          setLabel("Code sent.")
          setMessage(res?.message)
        });
      }}>
      {label}
    </button>
  );
};

export default SendCode;