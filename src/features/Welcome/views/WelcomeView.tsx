import { Link } from "react-router";

export default function WelcomeView() {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-800 flex-col gap-4">
        <h1 className="text-white text-xl font-bold">
          Welcome To Feature-Based React Project!
        </h1>
        <div className="flex items-center gap-2 justify-center">
          <Link
            className="border px-6 py-2 rounded border-white text-white"
            to={{ pathname: "/products" }}
          >
            Products
          </Link>
          <Link
            className="border px-6 py-2 rounded border-white text-white"
            to={{ pathname: "/posts" }}
          >
            Posts
          </Link>
        </div>
      </div>
    </>
  );
}
