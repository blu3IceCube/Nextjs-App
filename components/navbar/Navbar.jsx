"use client"
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex h-24 justify-between items-center">
            <Link className="font-bold text-2xl" href="/">Next App</Link>
            <div>
                <ul className="flex items-center gap-x-6">
                    <li className="hover:text-neutral-50">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-neutral-50">
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li className="hover:text-neutral-50">
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className="hover:text-neutral-50">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:text-neutral-50">
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li className="hover:text-neutral-50">
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