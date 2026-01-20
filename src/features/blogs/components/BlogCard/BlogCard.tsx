import { Link } from "react-router";
import { Calendar, Clock, User } from "lucide-react";
import type { Blog } from "../../types";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  blog: Blog;
  index: number;
}

const BlogCard = ({ blog, index }: BlogCardProps) => {
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article key={index} className="group h-full">
      <Link
        to={`/blog/${blog.id}`}
        className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="flex h-full flex-col overflow-hidden  bg-card shadow-card transition-all duration-300 hover:shadow-card-hover">
          {/* Image */}
          <div className="relative aspect-16/10 overflow-hidden rounded-xl">
            <img
              src={blog.coverImage}
              alt={blog.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-4 sm:p-6">
            {/* Categories */}
            <div className="mb-3 flex flex-wrap gap-1">
              {blog.category?.map((item: string) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="text-xs font-body"
                >
                  {item}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h2
              className="font-display text-base sm:text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary line-clamp-2"
              title={blog.title}
            >
              {blog.title}
            </h2>

            {/* Description */}
            <p
              className="mt-2 text-sm text-muted-foreground line-clamp-2"
              title={blog.description}
            >
              {blog.description}
            </p>

            {/* Meta */}
            <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex min-w-0 items-center gap-1 truncate">
                <User className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate" title={blog.author}>
                  {blog.author}
                </span>
              </span>

              <span className="flex min-w-0 items-center gap-1 truncate">
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate" title={formattedDate}>
                  {formattedDate}
                </span>
              </span>

              <span className="flex min-w-0 items-center gap-1 truncate">
                <Clock className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{blog.readTime}</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
