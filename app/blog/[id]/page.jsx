import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: 'no-store'
    })

    if(!res.ok) {
        return notFound()
    }

    return res.json()
}

export async function generateMetadata({ params }) {
    const post = await getData(params.id)
    return {
      title: post.title,
      description: post.desc
    };
  }

export default async function BlogPost({params}) {
    const data = await getData(params.id)
    return (
        <div className="mt-12">
            <div className="flex gap-5">
                <div className="flex flex-col justify-between flex-1">
                    <h1 className="text-4xl font-bold">{data.title}</h1>
                    <p className="text-lg font-light">{data.desc}</p>
                    <div className="flex items-center gap-2.5">
                        <Image className="object-cover rounded-3xl" src='/profile.jpg' width={40} height={40} alt='' />
                        <span className="font-bold">{data.username}</span>
                    </div>
                </div>
                <div className="flex-1 h-75 relative">
                    <Image src={data.img} fill={true} alt='' />
                </div>
            </div>
            <div className="my-12">
                <p className="text-lg font-light">
                    {data.content}
                </p>
            </div>
        </div>
    )
}