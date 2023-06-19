"use client";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import connect from "@/utils/db";

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();

  const [postData, setPostData] = useState({
    title: "",
    desc: "",
    img: "",
    content: "",
  });

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  function handleChange(e) {
    setPostData((prevPost) => {
      return {
        ...prevPost,
        [e.target.name]: e.target.value,
      };
    });
  }

  const { title, desc, img, content } = postData;
  const username = session.data.user.name;

  async function handleSubmit(e) {
    e.preventDefault();


    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      await fetch(`api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  }

  if (session.status === "authenticated") {
    return (
      <div className="flex items-center gap-24">
        <div className="flex flex-col flex-1">
          {isLoading
            ? "Loading..."
            : data.map((post) => {
                return (
                  <div
                    className="flex items-center justify-between my-12"
                    key={post._id}
                  >
                    <div className="w-50 h-25 relative">
                      <Image
                        src={post.img}
                        alt="post image"
                        width={200}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <h1 className="font-bold text-xl">{post.title}</h1>
                    <span
                      className="cursor-pointer text-red-500 font-medium"
                      onClick={() => handleDelete(post._id)}
                    >
                      X
                    </span>
                  </div>
                );
              })}
        </div>
        <form
          className="flex flex-col gap-5 w-125 items-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold mb-5 w-full">Add new posts</h1>
          <input
            className="p-3 bg-transparent border-2 border-solid border-zinc-400 rounded w-full"
            type="text"
            placeholder="Title"
            name="title"
            value={postData.title}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            className="p-3 bg-transparent border-2 border-solid border-zinc-400 rounded w-full"
            type="text"
            placeholder="Description"
            name="desc"
            value={postData.desc}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            className="p-3 bg-transparent border-2 border-solid border-zinc-400 rounded w-full"
            type="text"
            placeholder="Image"
            name="img"
            value={postData.img}
            onChange={handleChange}
            autoComplete="off"
          />
          <textarea
            className="p-3 bg-transparent border-2 border-solid border-zinc-400 rounded resize-none w-full"
            cols="30"
            rows="10"
            placeholder="Content"
            name="content"
            value={postData.content}
            onChange={handleChange}
          />
          <button className="p-3 cursor-pointer bg-green-600 rounded text-neutral-50 self-start">
            Send
          </button>
        </form>
      </div>
    );
  }
}
