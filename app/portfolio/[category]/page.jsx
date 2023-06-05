import Button from "@/components/button/button";
import Image from "next/image";

export default function Category({params}) {
    return (
        <div>
            <h1 className="text-green-400 text-4xl font-medium">{params.category}</h1>
            <div className="flex gap-12 mt-12 mb-24 odd:flex-row-reverse">
                <div className="flex flex-col gap-5 flex-1 justify-center">
                    <h1 className="text-5xl font-medium">Creative Portfolio</h1>
                    <p className="text-xl font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
                    <Button url='#' text='See More'/>
                </div>
                <div className="flex-1 relative h-75">
                    <Image className="object-cover" src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg' fill={true} alt=''/>
                </div>
            </div>
            <div className="flex gap-12 mt-12 mb-24 odd:flex-row-reverse">
                <div className="flex flex-col gap-5 flex-1 justify-center">
                    <h1 className="text-5xl font-medium">Creative Portfolio</h1>
                    <p className="text-xl font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
                    <Button url='#' text='See More'/>
                </div>
                <div className="flex-1 relative h-75">
                    <Image className="object-cover" src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg' fill={true} alt=''/>
                </div>
            </div>
        </div>
    )
}