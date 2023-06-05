import Link from "next/link";

export default function Portfolio() {
    return (
        <div>
            <h1 className="my-5 text-4xl font-bold">Choose a gallery</h1>
            <div className="flex gap-12">
                <Link className="border-4 border-solid border-zinc-400 rounded relative w-75 h-100 bg-illustration bg-cover hover:text-green-600" href='/portfolio/illustrations'>
                    <span className="absolute bottom-5 right-5 text-3xl font-bold">Illustrations</span>
                </Link>
                <Link className="border-4 border-solid border-zinc-400 rounded relative w-75 h-100 bg-websites bg-cover hover:text-green-600" href='/portfolio/websites'>
                    <span className="absolute bottom-5 right-5 text-3xl font-bold">Websites</span>
                </Link>
                <Link className="border-4 border-solid border-zinc-400 rounded relative w-75 h-100 bg-apps bg-cover hover:text-green-600" href='/portfolio/applications'>
                    <span className="absolute bottom-5 right-5 text-3xl font-bold">Applications</span>
                </Link>
            </div>
        </div>
    )
}