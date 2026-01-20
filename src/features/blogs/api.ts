import type { Blog, CreateBlogInput } from "./types";

const API_URL = "http://localhost:3001";

export const blogApi = {
  getAll: async (): Promise<Blog[]> => {
    const response = await fetch(`${API_URL}/blogs`);
    if (!response.ok) throw new Error("Failed to fetch blogs");
    return response.json();
  },

  getById: async (id: string): Promise<Blog> => {
    const response = await fetch(`${API_URL}/blogs/${id}`);
    if (!response.ok) throw new Error("Failed to fetch blog");
    return response.json();
  },

  create: async (data: CreateBlogInput): Promise<Blog> => {
    const blog = {
      ...data,
      id: crypto.randomUUID(),
      readTime: `${Math.ceil(data.content.split(" ").length / 200)} min read`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const response = await fetch(`${API_URL}/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });

    if (!response.ok) throw new Error("Failed to create blog");
    return response.json();
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_URL}/blogs/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete blog");
  },
};
