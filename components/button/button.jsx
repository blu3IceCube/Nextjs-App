import Link from "next/link";

export default function Button({url, text}) {
    return (
        <Link className='w-max' href={url}>
            <button className='cursor-pointer bg-green-600 p-4 rounded-md text-neutral-50'>{text}</button>
        </Link>
    )
}