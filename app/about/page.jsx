import Button from "@/components/button/button";
import Image from "next/image";

export default function About() {
    return (
        <div>
            <div className="w-full h-75 relative">
                <Image className="object-cover grayscale" src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' fill={true} alt='' />
                <div className="absolute bottom-5 left-5 bg-green-600 p-1.5 text-neutral-50">
                    <h1 className="text-3xl font-bold">Digital Storytellers</h1>
                    <h2 className="text-xl font-medium">Hancrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className="flex gap-25">
                <div className="flex flex-col gap-8 flex-1 mt-12">
                    <h1 className="text-3xl font-bold">Who Are We?</h1>
                    <p className="text-lg font-light text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae.
                        <br />
                        <br />
                        A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? 
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?
                    </p>
                </div>
                <div className="flex flex-col gap-8 flex-1 mt-12">
                    <h1 className="text-3xl font-bold">What We Do?</h1>
                    <p className="text-lg font-light text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                        <br /> - Creative Illustrations
                        <br />
                        <br /> - Dynamic Websites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </p>
                    <Button url='/contact' text='Contact'/>
                </div>
            </div>
        </div>
    )
}