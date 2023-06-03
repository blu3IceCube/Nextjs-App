import Image from "next/image";

export default function Footer() {
    return (
        <footer className="h-12 flex items-center justify-between">
            <div>
                &#169; 2023 Next App. All rights reserved.
            </div>
            <div className="flex gap-5">
                <Image className="cursor-pointer opacity-60 hover:opacity-100" src="/1.png" width={20} height={20} alt="Nextjs App facebook"/>
                <Image className="cursor-pointer opacity-60 hover:opacity-100" src="/2.png" width={20} height={20} alt="Nextjs App instagram"/>
                <Image className="cursor-pointer opacity-60 hover:opacity-100" src="/3.png" width={20} height={20} alt="Nextjs App twitter"/>
                <Image className="cursor-pointer opacity-60 hover:opacity-100" src="/4.png" width={20} height={20} alt="Nextjs App youtube"/>
            </div>
        </footer>
    )
}