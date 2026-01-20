import type { Blog } from "./types";

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

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_URL}/blogs/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete blog");
  },
};
