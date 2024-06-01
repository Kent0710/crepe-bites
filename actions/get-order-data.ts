'use server'

import client from "@/lib/db";

export default async function getOrderData(orderId : string) {
    try {
        const order = await client.order.findUnique({
            where : {
                id : orderId
            }
        });

        if (!order) return null;

        return order;
    } catch (e) {
        console.error("Error getting order data from the server: ", e);
        return null;
    }
}