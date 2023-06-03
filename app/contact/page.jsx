import Button from "@/components/button/button";
import Image from "next/image";

export default function Contact() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-14 text-center">Let's keep in touch.</h1>
            <div className="flex gap-25 items-center">
                <div className="flex-1 h-125 relative">
                    <Image className="object-contain animate-hover-scale" src='/contact.png' alt='' fill={true}/>
                </div>
                <form className="flex flex-col gap-5 flex-1">
                    <input className="p-3 bg-transparent border-2 border-solid border-zinc-400" type="text" placeholder="Name"/>
                    <input className="p-3 bg-transparent border-2 border-solid border-zinc-400" type="email" placeholder="Email"/>
                    <textarea className="p-3 bg-transparent border-2 border-solid border-zinc-400" placeholder="Message" cols="30" rows="10"></textarea>
                    <Button url='#' text='Send'/>
                </form>
            </div>
        </div>
    )
}