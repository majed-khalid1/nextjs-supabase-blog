import { createClient } from "@/utils/supabase/server";
import TrackRecentlyViewedPosts from "@/components/track-recently-viewed";
import { Suspense } from "react";
import Link from "next/link";

async function PostContent({ params }) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !post) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
        <p className="text-red-600">Post not found.</p>
      </div>
    );
  }

  return (
    <>
      <TrackRecentlyViewedPosts
        post={{
          id: post.id,
          title: post.title,
        }}
      />
      <article className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
        <div className="mb-6 border-b border-zinc-200 pb-6">
          <p className="mb-2 text-sm font-medium text-zinc-500">
            Post #{post.id}
          </p>

          <h1 className="text-3xl font-bold leading-tight text-zinc-950 sm:text-4xl">
            {post.title}
          </h1>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-zinc-900">Content</h2>

          <p className="text-lg leading-8 text-zinc-700">{post.body}</p>
        </div>

        <div className="mt-8 flex gap-3">
          <Link
            href="/posts"
            className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
          >
            Back to posts
          </Link>

          <Link
            href={`/posts/${post.id}/edit`}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Edit post
          </Link>
        </div>
      </article>
    </>
  );
}

export default function PostPage({ params }) {
  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Suspense
          fallback={
            <div className="rounded-xl border border-zinc-200 bg-white p-8">
              <p className="text-zinc-500">Loading post...</p>
            </div>
          }
        >
          <PostContent params={params} />
        </Suspense>
      </div>
    </main>
  );
}
