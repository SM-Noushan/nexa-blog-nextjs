"use client";
import BlogCard from "@/components/ui/BlogCard";
import Spinner from "@/components/ui/Spinner";
import { useGetBlogsQuery } from "@/redux/apis/blogs.slice";
// import { Metadata } from "next";
import { Blog } from "@/types";

// export const metadata: Metadata = {
//   title: "NexaBlog | Blogs",
//   description: "Explore all blogs on NexaBlog",
// };

const BlogsPage = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery(undefined);
  // const res = await fetch("http://localhost:5000/blogs", { cache: "no-store" });
  // const blogs = await res.json();
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Explore All <span className="text-teal-600">Blogs</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {blogs.map((blog: Blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
