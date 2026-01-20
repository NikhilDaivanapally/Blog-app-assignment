import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { blogApi } from "./api";
import type { CreateBlogInput } from "./types";

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: blogApi.getAll,
  });
};

export const useBlog = (id: string) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => blogApi.getById(id),
    enabled: !!id,
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateBlogInput) => blogApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => blogApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
