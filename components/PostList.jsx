import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import EditLink from "@/components/editLink";
import DeleteButton from "@/components/deleteButton";

export const PostList = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    return <p>Failed to load posts.</p>;
  }
  const isLoggedIn = !!user;

  return (
    <ul className="space-y-6">
      {posts.map((post) => (
        <li key={post.id} className="flex items-center mt-3">
          {/* Post title */}
          <Link href={`/posts/${post.id}`} className="pr-10">
            {post.id} - {post.title}
          </Link>

          {/* Edit + Delete */}
          <div className="flex items-center gap-2">
            <EditLink postId={post.id} isLoggedIn={isLoggedIn} />

            <DeleteButton postId={post.id} isLoggedIn={isLoggedIn} />
          </div>
        </li>
      ))}
    </ul>
  );
};
