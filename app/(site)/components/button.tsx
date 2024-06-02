"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({
    className,
    text,
    type,
} : {
    className? : string;
    text : string;
    type : "submit" | "reset" | "button" | undefined
}) {
  const { pending } = useFormStatus();

  return <button type={type} className={className}>
    {pending ? "Loading..." : [text]}
  </button>;
}