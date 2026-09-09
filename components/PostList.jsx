import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import EditLink from "@/components/editLink";
import DeleteButton from "@/components/deleteButton";

export const PostList = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: posts } = await supabase
    .from("posts")
    .select("id, title, body")
    .order("id", { ascending: false });
  if (!posts || posts.length === 0) {
    return (
      <p className="rounded-lg border border-zinc-200 p-8 text-center text-zinc-500">
        No posts have been created yet.
      </p>
    );
  }
  const isLoggedIn = Boolean(user);

  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {posts.map((post) => (
        <li
          key={post.id}
          className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow"
        >
          {/* Post title */}
          <p className="mb-2 text-sm font-medium text-zinc-500">
            Post #{post.id}
          </p>

          <Link
            href={`/posts/${post.id}`}
            className="text-xl font-semibold text-zinc-900 hover:text-blue-600"
          >
            {post.title}
          </Link>

          {/* Edit + Delete */}
          <div className="mt-auto flex items-center justify-center gap-2 pt-6">
            <EditLink postId={post.id} isLoggedIn={isLoggedIn} />

            <DeleteButton postId={post.id} isLoggedIn={isLoggedIn} />
          </div>
        </li>
      ))}
    </ul>
  );
};
