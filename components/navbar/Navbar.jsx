"use client"
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Navbar() {
    return (
        <nav className="flex h-24 justify-between items-center">
            <Link className="font-bold text-2xl" href="/">Next App</Link>
            <div className="flex items-center gap-5">
                <DarkModeToggle/>
                <ul className="flex items-center gap-x-6">
                    <li className="hover:text-green-400">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-green-400">
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li className="hover:text-green-400">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className="hover:text-green-400">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:text-green-400">
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className="hover:text-green-400">
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <button className="bg-green-600 p-1.5 text-neutral-50 rounded" onClick={() => {console.log("logged out");}}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}