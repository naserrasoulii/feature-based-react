import { usePost } from "@/features/Post/hooks/usePost";
import PostItem from "./PostItem";
import type { PostModel } from "../types/post.types";

export default function PostList() {
  const { posts } = usePost();
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {posts?.map((item: PostModel) => (
        <PostItem key={item.id} body={item.body} title={item.title} />
      ))}
    </div>
  );
}
