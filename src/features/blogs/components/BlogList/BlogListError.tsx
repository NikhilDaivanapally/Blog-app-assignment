import { AlertCircle } from "lucide-react";

const BlogListError = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <AlertCircle className="mb-4 h-12 w-12 text-destructive" />
      <h2 className="font-display text-xl font-semibold text-foreground">
        Unable to load Blogs
      </h2>
      <p className="mt-2 max-w-md font-body text-muted-foreground">
        Make sure json-server is running on port 3001. Run:{" "}
        <code className="rounded bg-muted px-2 py-1 text-sm">
          npx run server
        </code>
      </p>
    </div>
  );
};

export default BlogListError;
