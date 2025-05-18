export default function PostItem({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-lg border p-2 border-black/20 ">
      <p className="font-bold text-lg">{title}</p>
      <p className="text-teal-800">{body}</p>
    </div>
  );
}
