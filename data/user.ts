import { db } from "@/lib/db"
import { userAgent } from "next/server";

export const getUserByEmail = async (email: string) => {
    try{
        const user = await db.user.findUnique({where: { email }})

        return user;
    }catch {
        return null;
    }
}

export const getUserById = async (id: string) => {
    try{
        const user = await db.user.findUnique({where: { id }})

        return user;
    }catch {
        return null;
    }
}