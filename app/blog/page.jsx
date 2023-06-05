import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    return (
        <div>
            <Link className="flex gap-12 items-center mb-12" href='/blog/testId'>
                <div>
                    <Image className="object-cover" src='/blog.jpg' width={600} height={350} alt=''/>
                </div>
                <div>
                    <h1 className="mb-2.5 text-4xl font-medium">Test Title</h1>
                    <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
                </div>
            </Link>
            <Link className="flex gap-12 items-center mb-12" href='/blog/testId'>
                <div>
                    <Image className="object-cover" src='/blog.jpg' width={600} height={350} alt=''/>
                </div>
                <div>
                    <h1 className="mb-2.5 text-4xl font-medium">Test Title</h1>
                    <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
                </div>
            </Link>
        </div>
    )
}