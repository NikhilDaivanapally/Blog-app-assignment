import BlogCardSkeleton from "../BlogCard/BlogCardSkeleton";

const BlogListSkeleton = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default BlogListSkeleton;
