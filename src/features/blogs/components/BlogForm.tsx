import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { CreateBlogInput } from "../types";

const blogSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must be less than 100 characters"),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(200, "Description must be less than 200 characters"),

  content: z.string().min(50, "Content must be at least 50 characters"),

  author: z
    .string()
    .min(2, "Author name must be at least 2 characters")
    .max(50, "Author name must be less than 50 characters"),

  coverImage: z.string().url("Please enter a valid image URL"),

  category: z.array(z.string()).min(1, "Please select at least one category"),
});

const categories = [
  "Technology",
  "Design",
  "Lifestyle",
  "Travel",
  "Food",
  "Business",
  "Health",
];

interface BlogFormProps {
  onSubmit: (data: CreateBlogInput) => void;
  isLoading?: boolean;
}


const BlogForm = ({ onSubmit, isLoading }: BlogFormProps) => {
  const form = useForm<CreateBlogInput>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      author: "",
      coverImage: "",
      category: [],
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your blog title..."
                  className="text-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Author + Category */}
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category (Array) */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={(value) =>
                    field.onChange(
                      field.value.includes(value)
                        ? field.value.filter((c) => c !== value)
                        : [...field.value, value],
                    )
                  }
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select categories" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Selected categories */}
                {field.value.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {field.value.map((cat) => (
                      <span
                        key={cat}
                        className="rounded bg-muted px-2 py-1 text-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Cover Image */}
        <FormField
          control={form.control}
          name="coverImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Image URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="A brief summary of your blog post..."
                  className="min-h-20 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Content */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your blog content here..."
                  className="min-h-75"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full md:w-auto"
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Publishing..." : "Publish Story"}
        </Button>
      </form>
    </Form>
  );
};

export default BlogForm;
