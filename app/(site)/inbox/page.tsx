import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";

import { Suspense } from "react";

export default async function InboxPage() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/signUp");
  }

  return (
    <div className="flex flex-col items-center pt-20 py-5 md:px-36  text-sm text-chocolate">
      <div className="flex flex-col gap-6 p-10 w-full">
        <section>
          <h1 className="font-semibold text-2xl">Inbox </h1>
          <p>Messages from the server appears here.</p>
        </section>
      </div>
      <div className="flex flex-col gap-6 px-10 w-full">
        <table>
          <thead>
            <tr>
              <th>Message</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <Suspense fallback={<p>fetching daata</p>}>
              {user.inbox?.map((message: any) => (
                <tr key={message.id} className="text-center ">
                  <td className="truncate">{message.content}</td>
                  <td>{message.date.toString()}</td>
                </tr>
              ))}
            </Suspense>
          </tbody>
        </table>
      </div>
    </div>
  );
}
