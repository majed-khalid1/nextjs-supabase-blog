import { createClient } from "@/utils/supabase/server";
import { updatePost } from "@/actions/posts";
import { redirect } from "next/navigation";

const EditPostForm = async ({ params }) => {
  const supabase = await createClient();

  // Check if user is logged in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not logged in → stop here
  if (!user) {
    redirect("/posts");
    return;
  }

  // Logged in → continue
  const { id } = await params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !post) {
    return <p>Post not found.</p>;
  }

  return (
    <form action={updatePost} className="space-y-5">
      <input type="hidden" name="id" value={post.id} />

      <div>
        <label htmlFor="title" className="mb-2 block text-sm font-medium">
          Title
        </label>

        <input
          id="title"
          name="title"
          type="text"
          defaultValue={post.title}
          required
          className="w-full rounded border border-zinc-300 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="body" className="mb-2 block text-sm font-medium">
          Content
        </label>

        <textarea
          id="body"
          name="body"
          rows={5}
          defaultValue={post.body}
          required
          className="w-full rounded border border-zinc-300 px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Update
      </button>
    </form>
  );
};

export default EditPostForm;
