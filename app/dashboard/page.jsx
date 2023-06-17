"use client"
import { useSession } from "next-auth/react"
import Link from "next/link";

export default function Dashboard() {

    const session = useSession()

    console.log(session);

    return (
        <div>
            Dashboard Page.
        </div>
    )
}