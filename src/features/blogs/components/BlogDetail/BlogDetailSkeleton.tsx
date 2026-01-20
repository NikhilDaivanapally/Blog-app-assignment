import { Skeleton } from "@/components/ui/skeleton";

const BlogDetailSkeleton = () => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <Skeleton className="mb-8 h-8 w-24" />
      <Skeleton className="mb-4 h-12 w-full" />
      <Skeleton className="mb-8 h-6 w-1/2" />
      <Skeleton className="aspect-video w-full rounded-xl" />
      <div className="mt-8 space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
};

export default BlogDetailSkeleton;
