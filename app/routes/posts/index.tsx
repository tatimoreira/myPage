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
      <main>
        <h1>Posts</h1>
        <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      </main>
    );
  }