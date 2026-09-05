"use client";

import { createPost } from "@/actions/posts";

const CreatePostForm = ({ isLoggedIn }) => {
  const handleSubmit = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();

      alert("Please log in first.");
    }
  };

  return (
    <form action={createPost} onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="title" className="mb-2 block text-sm font-medium">
          Title
        </label>

        <input
          id="title"
          name="title"
          type="text"
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
          required
          className="w-full rounded border border-zinc-300 px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-black px-4 py-2 text-sm font-semibold text-white"
      >
        Create
      </button>
    </form>
  );
};

export default CreatePostForm;
