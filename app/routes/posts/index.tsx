import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getPosts } from "~/models/post.server";


type Post = {
  slug: string;
  title: string;
};

type LoaderData = {
  posts: Array<Post>;
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Posts() {
  const { posts } = useLoaderData() as LoaderData;
  console.log(posts);
  return (
    <main className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 relative min-h-screen sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm bg-white/10 relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-32 lg:pt-32 lg:pb-32 ">

              <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-3xl lg:text-3xl">
                <span className="block uppercase text-white drop-shadow-md">
                  Posts
                </span>
                
              </h1>
              <p className="mx-auto mt-3 max-w-lg text-center text-xl text-white sm:max-w-3xl">A collection of my writtings </p>
              <ul className="mt-5">
                {posts.map((post) => (
                  <li key={post.slug} className="mt-3">
                    <Link
                      to={post.slug}
                      className="text-white underline"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}