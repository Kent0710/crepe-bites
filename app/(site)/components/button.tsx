"use client";

import { useFormStatus } from "react-dom";
import { Send } from "lucide-react";
import { Loader } from "lucide-react";

export default function SubmitButton({
    className,
    text,
    type,
    loadingText,
} : {
    className? : string;
    loadingText? : string;
    text : string;
    type : "submit" | "reset" | "button" | undefined
}) {
  const { pending } = useFormStatus();

  return <button type={type} className={className}>
    {pending ? 
        <>
            <Loader className="w-4 animate-spin" />
            {loadingText || "Loading..."}
        </>
    : 
        <>
            <Send className="w-4" />
            {text}
        </>
    }
  </button>;
}