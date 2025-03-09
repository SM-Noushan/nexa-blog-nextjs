import { blogs } from "../route";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const blog = blogs.find((blog) => blog.id === params.id);
  return NextResponse.json(blog);
};
