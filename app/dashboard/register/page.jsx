"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [registerFormData, setRegisterFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null)

  const router = useRouter()

  function handleChange(e) {
    setRegisterFormData(prevData => {
        return {
            ...prevData,
            [e.target.name]: e.target.value
        }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(registerFormData)
        })

        res.status === 201 && router.push("/dashboard/login?success=true")

    } catch (error) {
        setErr(true)
        console.log('error', error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 mx-auto p-5">
      <form className="flex flex-col w-75 gap-5" onSubmit={handleSubmit}>
        <input
          className="p-3 bg-transparent border-2 border-solid border-zinc-400 rounded"
          type="text"
          placeholder="Username"
          name="username"
          value={registerFormData.username}
          onChange={handleChange}
          required
        />
        <input
          className="p-3 bg-transparent border-2 border-solid border-zinc-400 rounded"
          type="email"
          placeholder="Email"
          name="email"
          value={registerFormData.email}
          onChange={handleChange}
          required
        />
        <input
          className="p-3 bg-transparent border-2 border-solid border-zinc-400 rounded"
          type="password"
          placeholder="Password"
          name="password"
          value={registerFormData.password}
          onChange={handleChange}
          required
        />
        <button className="w-75 p-3 cursor-pointer bg-green-600 rounded text-neutral-50">
          Register
        </button>
      </form>
      {err && <div className="text-red-500">Something went wrong!</div>}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
}
