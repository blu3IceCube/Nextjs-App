"use client"
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const currentPath = usePathname()
    return (
        <nav className="flex h-24 justify-between items-center">
            <Link className="font-bold text-2xl" href="/">Next App</Link>
            <div className="flex items-center gap-5">
                <DarkModeToggle/>
                <ul className="flex items-center gap-x-6">
                    <li className="hover:text-green-400">
                        <Link className={currentPath === '/' ? 'text-green-400' : ''} href="/">Home</Link>
                    </li>
                    <li className="hover:text-green-400">
                        <Link className={currentPath === '/portfolio' ? 'text-green-400' : ''} href="/portfolio">Portfolio</Link>
                    </li>
                    <li className="hover:text-green-400">
                        <Link className={currentPath === '/blog' ? 'text-green-400' : ''} href="/blog">Blog</Link>
                    </li>
                    <li className="hover:text-green-400">
                        <Link className={currentPath === '/about' ? 'text-green-400' : ''} href="/about">About</Link>
                    </li>
                    <li className="hover:text-green-400">
                        <Link className={currentPath === '/contact' ? 'text-green-400' : ''} href="/contact">Contact</Link>
                    </li>
                    <li className="hover:text-green-400">
                        <Link className={currentPath === '/dashboard' ? 'text-green-400' : ''} href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <button className="bg-green-600 p-1.5 text-neutral-50 rounded" onClick={() => {console.log("logged out");}}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}