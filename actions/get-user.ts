'use server'

import client from "@/lib/db";

export default async function getUser(userId : string) {
    try {
        const session = await client.session.findUnique({
            where : {
                id : "6658585ec26a43dd883d88a1" 
            },
            include : {
                user : {
                    include : {
                        order : true
                    }
                }
            }
        })

        if (!session) return {
            message : "session not found"
        };

        const user = session[userId];
        return user;
    } catch (e) {
        return {
            message : "error getting user"
        }
    }
}