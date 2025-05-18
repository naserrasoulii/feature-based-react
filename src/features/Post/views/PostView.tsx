import PostList from "@features/Post/components/PostList";

export default function PostView() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold"> Post list : </h1>
        <PostList />
      </div>
    </>
  );
}
