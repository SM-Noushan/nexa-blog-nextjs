import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: { revalidate: 900 },
  });
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog: { id: string }) => ({
    blogId: blog.id,
  }));
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return <BlogDetailsCard blog={blog} />;
};

export default BlogDetailsPage;
