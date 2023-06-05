import Image from "next/image";

export default function BlogPost() {
    return (
        <div className="mt-12">
            <div className="flex gap-5">
                <div className="flex flex-col justify-between flex-1">
                    <h1 className="text-4xl font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                    <p className="text-lg font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
                    <div className="flex items-center gap-2.5">
                        <Image className="object-cover rounded-3xl" src='/profile.jpg' width={40} height={40} alt='' />
                        <span className="font-bold">John Doe</span>
                    </div>
                </div>
                <div className="flex-1 h-75 relative">
                    <Image src='/blog.jpg' fill={true} alt='' />
                </div>
            </div>
            <div className="my-12">
                <p className="text-lg font-light">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?
                </p>
            </div>
        </div>
    )
}