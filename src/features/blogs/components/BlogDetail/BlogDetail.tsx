import { Link } from "react-router";
import { ArrowLeft, Calendar, Clock, User, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { Blog } from "../../types";
type Props = {
  blog: Blog;
  onDelete: () => void;
};

const BlogDetail = ({ blog, onDelete }: Props) => {
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <article className="container mx-auto  px-4">
      <div className="mb-8 flex items-center justify-between">
        <Button variant="ghost" asChild className="gap-2">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this Blog?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                Blog from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div>
        <Badge variant="secondary" className="mb-4 font-body">
          {blog.category}
        </Badge>
        <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
          {blog.title}
        </h1>
        <p className="mt-4 font-body text-lg text-muted-foreground">
          {blog.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-border pb-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {blog.author}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {blog.readTime}
          </span>
        </div>
      </div>

      <div className="mt-8">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="aspect-video w-full rounded-xl object-cover shadow-card"
        />
      </div>

      <div className="prose prose-lg mt-10 max-w-none font-body">
        {blog.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-6 leading-relaxed text-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

export default BlogDetail;
