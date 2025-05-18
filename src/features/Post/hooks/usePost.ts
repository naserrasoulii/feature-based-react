import { useEffect, useState } from "react";
import type { PostModel } from "../types/post.types";

export const usePost = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);
  async function getPosts(): Promise<PostModel[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  }

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  return { posts };
};
