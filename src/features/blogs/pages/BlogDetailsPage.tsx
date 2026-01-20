import { useParams, useNavigate } from "react-router";
import { useBlog, useDeleteBlog } from "../hooks";
import { toast } from "sonner";
import BlogDetailSkeleton from "../components/BlogDetail/BlogDetailSkeleton";
import BlogDetailError from "../components/BlogDetail/BlogDetailError";
import BlogDetailEmtpy from "../components/BlogDetail/BlogDetailEmpty";
import BlogDetail from "../components/BlogDetail/BlogDetail";

const BlogDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: blog, isLoading, isError } = useBlog(id || "");
  const deleteMutation = useDeleteBlog();

  const handleDelete = async () => {
    if (!id) return;
    try {
      await deleteMutation.mutateAsync(id);
      toast.success("Blog deleted", {
        description: "Your blog  has been removed successfully.",
      });
      navigate("/");
    } catch {
      toast.error("Error", {
        description: "Failed to delete the blog.",
      });
    }
  };

  if (isLoading) return <BlogDetailSkeleton />;
  if (isError) return <BlogDetailError />;
  if (!blog) return <BlogDetailEmtpy />;

  return <BlogDetail blog={blog} onDelete={handleDelete} />;
};

export default BlogDetailsPage;
