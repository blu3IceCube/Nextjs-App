"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const session = useSession()
  const router = useRouter()

  if(session.status === "loading") {
    <p>Loading...</p>
  }

  if(session.status === "authenticated") {
    router?.push("/dashboard")
  }

    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    })

    function handleChange(e) {
        setLoginFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

  async function handleSubmit(e) {
    e.preventDefault();
    signIn("credentials", loginFormData)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 mx-auto p-5">
      <form className="flex flex-col w-75 gap-5" onSubmit={handleSubmit}>
        <input
          className="p-3 bg-transparent border-2 border-solid border-zinc-400 rounded"
          type="email"
          placeholder="Email"
          name="email"
          value={loginFormData.email}
          onChange={handleChange}
          required
        />
        <input
          className="p-3 bg-transparent border-2 border-solid border-zinc-400 rounded"
          type="password"
          placeholder="Password"
          name="password"
          value={loginFormData.password}
          onChange={handleChange}
          required
        />
        <button className="w-75 p-3 cursor-pointer bg-green-600 rounded text-neutral-50">
          Login
        </button>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
}
