import Button from "@/components/button/button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
    const data = items[category]

    if (data) {
        return data
    }

    return notFound()
}

export default function Category({ params }) {
    const data = getData(params.category)
    return (
        <div>
            <h1 className="text-green-400 text-4xl font-medium">{params.category}</h1>
            {data.map(item => (
                <div className="flex gap-12 mt-12 mb-24 odd:flex-row-reverse" key={item.id}>
                    <div className="flex flex-col gap-5 flex-1 justify-center">
                        <h1 className="text-5xl font-medium">{item.title}</h1>
                        <p className="text-xl font-light">{item.desc}</p>
                        <Button url='#' text='See More' />
                    </div>
                    <div className="flex-1 relative h-75">
                        <Image className="object-cover" src={item.image} fill={true} alt='' />
                    </div>
                </div>
            ))}
        </div>
    )
}