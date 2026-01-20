import type { Blog } from "../../types";
import BlogCard from "../BlogCard/BlogCard";

type Props = {
  blogs: Blog[];
};

const BlogList = ({ blogs }: Props) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 sm:p-2">
      {blogs.map((blog, index) => (
        <BlogCard key={blog.id} blog={blog} index={index} />
      ))}
    </div>
  );
};

export default BlogList;
