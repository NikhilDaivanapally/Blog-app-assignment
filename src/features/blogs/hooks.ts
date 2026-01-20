import { useQuery } from "@tanstack/react-query";
import { blogApi } from "./api";

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: blogApi.getAll,
  });
};
