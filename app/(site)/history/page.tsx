import { validateRequest } from "@/lib/lucia";

import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function HistoryPage() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/signUp");
  }

  return (
    <div className="flex flex-col items-center pt-20 py-5 md:px-36  text-sm text-chocolate">
      <div className="flex flex-col gap-6 p-10 w-full">
        <section>
          <h1 className="font-semibold text-2xl">History </h1>
          <p>Review your previous transactions within the website.</p>
        </section>
      </div>
      <div className="flex flex-col gap-6 px-10 w-full">
        <table>
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Claim Time</th>
              <th>Use Code Points</th>
            </tr>
          </thead>
          <Suspense fallback={<p>fetching daata</p>}>
            <tbody>
              {user.order.map((order: any) => (
                <tr key={order.id} className="text-center">
                  <td>{order.orderNumber}</td>
                  <td>{order.claimTime.toString()}</td>
                  <td>{order.useCodePoints.toString()}</td>
                </tr>
              ))}
            </tbody>
          </Suspense>
        </table>
      </div>
    </div>
  );
}
