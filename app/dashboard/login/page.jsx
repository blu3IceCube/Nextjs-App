"use client"

import { signIn } from "next-auth/react"

export default function Login() {
    return (
        <div>
            <button onClick={() => signIn("google")}>Login with Google</button>
        </div>
    )
}