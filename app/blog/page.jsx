import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Next.js App blog',
    description: 'App blog page.',
  }

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();
  return (
    <div>
      {data.map((item) => (
        <Link className="flex gap-12 items-center mb-12" href={`/blog/${item._id}`}>
          <div>
            <Image
              className="object-cover"
              src={item.img}
              width={600}
              height={350}
              alt=""
            />
          </div>
          <div>
            <h1 className="mb-2.5 text-4xl font-medium">{item.title}</h1>
            <p className="text-lg">
              {item.desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
