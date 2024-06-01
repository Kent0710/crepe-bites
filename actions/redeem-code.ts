'use server'

import { ActionResult } from "@/lib/form"
import { revalidatePath } from "next/cache";

import client from "@/lib/db";

export default async function redeemCode(_: any, userId : string, formData : FormData) : Promise<ActionResult> {
    try {
        const rawCode = formData.get("codePoints");

        if (typeof rawCode !== "string"
            || rawCode.length !== 6
        ) {
            return {
                error : "Invalid code"
            }
        }

        if (rawCode.toString() !== "AAAAAA") {
            return {
                error : "Code does not exist"
            }
        };

        const addPoint = await client.user.update({
            where : {
                id : userId
            },
            data : {
                codePoints : {
                    increment : 1
                }
            }
        })

        revalidatePath("/redeem");
        return {
            error : "No error"
        }
    } catch (e) {
        return {
            error : "Unknown error occured. Please refresh the page and try again."
        }
    }
}