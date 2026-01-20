import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const BlogDetailError = () => {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-12 text-center">
      <h2 className="font-display text-2xl font-semibold text-foreground">
        Something went wrong
      </h2>
      <p className="mt-2 font-body text-muted-foreground">
        The Blog you're looking for doesn't exist or has been removed.
      </p>
      <Button asChild className="mt-6">
        <Link to="/">Back to Blogs</Link>
      </Button>
    </div>
  );
};

export default BlogDetailError;
