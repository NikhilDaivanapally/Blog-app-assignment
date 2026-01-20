import { BookOpen } from "lucide-react";

const BlogListEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <BookOpen className="mb-4 h-12 w-12 text-muted-foreground" />
      <h2 className="font-display text-xl font-semibold text-foreground">
        No Blogs yet
      </h2>
      <p className="mt-2 font-body text-muted-foreground">
        Be the first to share your Blog!
      </p>
    </div>
  );
};

export default BlogListEmpty;
