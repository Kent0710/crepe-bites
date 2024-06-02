"use client";

import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { CircleAlert } from "lucide-react";
import { ShoppingCart } from "lucide-react";

import getOrderData from "../../../../actions/get-order-data";

import Link from "next/link";

export default function InvoiceOrderPage() {
  const params = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<any>();

  useEffect(() => {
    async function getOrderDataHandler() {
      const getOrder = await getOrderData(params.orderId);
      if (!getOrder) setOrder(null);
      setOrder(getOrder);
    }

    getOrderDataHandler();
  }, [params]);

  return (
    <Suspense fallback={<p>loading</p>}>
      <div className="flex flex-col items-center pt-20 py-5  md:px-36 text-sm text-chocolate">
        <div className="flex flex-col gap-6 p-10 w-full">
          <section>
            <h1 className="font-semibold text-2xl">
              Congratulations! You succesfully made your first order.
            </h1>
            <p>
              Please take a screenshot of this and present it to the counter on
              claiming. The PHP 35.00 payment will also be settled at the venue.
            </p>
          </section>
          <div className="flex flex-col items-center">
            <p>Your order number is</p>
            <p className="text-7xl font-semibold">
              {" "}
              {order?.orderNumber.toString()}{" "}
            </p>
            <p className="font-semibold text-xl">Order ID: {order?.id} </p>
          </div>
          <Link
            href="/order"
            className="bg-navy text-yellow-400 flex gap-3 place-self-center px-20 justify-center items-center py-2"
          >
            <ShoppingCart className="w-4" />
            Buy Again
          </Link>
          <ul className="flex flex-col gap-3 list-disc list-inside">
            <div className="flex items-center gap-3">
              <CircleAlert className="w-4" />
              <p className="font-semibold text-xl">Reminders.</p>
            </div>
            <li>Claim your order at NU Lipa 5th Student Lounge.</li>
            <li>Settle the payment at the venue.</li>
            <li>
              Show up within 20 minutes from your set time{" "}
              {order?.claimTime.toString()}. Failure to do so will result in
              void order.
            </li>
            <li>Message us at crepebites@gmail.com for any concerns.</li>
          </ul>
        </div>
      </div>
    </Suspense>
  );
}