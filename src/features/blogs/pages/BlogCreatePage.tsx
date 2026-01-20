import { useNavigate } from "react-router";
import { useCreateBlog } from "../hooks";
import type { CreateBlogInput } from "../types";
import BlogForm from "../components/BlogForm";
import { toast } from "sonner";

const BlogCreatePage = () => {
  const navigate = useNavigate();
  const createMutation = useCreateBlog();

  const handleSubmit = async (data: CreateBlogInput) => {
    try {
      await createMutation.mutateAsync(data);
      toast.success("Blog published!", {
        description: "Your story is now live for everyone to read.",
      });
      navigate("/");
    } catch {
      toast.error("Error", {
        description: "Failed to publish your story. Please try again.",
      });
    }
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Write Your Blog
        </h1>
        <p className="mt-3 font-body text-muted-foreground">
          Share your thoughts, ideas, and experiences with the world
        </p>
      </div>

      <div className="rounded-xl bg-card p-6 shadow-card md:p-8">
        <BlogForm
          onSubmit={handleSubmit}
          isLoading={createMutation.isPending}
        />
      </div>
    </div>
  );
};

export default BlogCreatePage;
