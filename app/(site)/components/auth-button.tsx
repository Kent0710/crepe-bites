import Link from "next/link";

import { LogIn } from "lucide-react";
import { LogOut } from "lucide-react";

import { validateRequest } from "@/lib/lucia";
import { ActionResult } from "@/lib/form";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { Form } from "@/lib/form";

const AuthButton = async () => {
  const { user } = await validateRequest();
  if (user) {
    return (
      <Form
        action={logout}
      >
        <button type="submit" className="text-white flex items-center gap-3">
          <p>Log out</p>
          <LogOut className="w-4 shrink-0" />
        </button>
      </Form>
    );
  }

  return (
    <Link href="/signUp" className="text-white flex items-center gap-3">
        <p>Log in</p>
        <LogIn className="w-4" />
    </Link>
  )
};

export default AuthButton;

async function logout(): Promise<ActionResult> {
  "use server";
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/");
}
