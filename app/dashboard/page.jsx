"use client"
import { useSession } from "next-auth/react"
import Link from "next/link";

export default function Dashboard() {

    const session = useSession()

    return (
        <div>
            Dashboard Page.
        </div>
    )
}