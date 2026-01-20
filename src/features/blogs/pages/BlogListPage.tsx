import BlogList from "../components/BlogList/BlogList";
import BlogListEmpty from "../components/BlogList/BlogListEmpty";
import BlogListError from "../components/BlogList/BlogListError";
import BlogListSkeleton from "../components/BlogList/BlogListSkeleton";
import { useBlogs } from "../hooks";

const BlogListPage = () => {
  const { data, isLoading, isError } = useBlogs();

  if (isLoading) return <BlogListSkeleton />;
  if (isError) return <BlogListError />;
  if (!data?.length) return <BlogListEmpty />;

  return <BlogList blogs={data} />;
};

export default BlogListPage;
