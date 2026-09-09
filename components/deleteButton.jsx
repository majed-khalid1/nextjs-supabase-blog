"use client";

import { deletePost } from "@/actions/posts";

const DeleteButton = ({ postId, isLoggedIn }) => {
  const handleSubmit = (event) => {
    if (!isLoggedIn) {
      event.preventDefault();

      alert("Log in to delete posts.");
      return null;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this post?",
    );
    if (!confirmed) {
      event.preventDefault();
    }
  };

  return (
    <form action={deletePost} onSubmit={handleSubmit} className="pb-20px">
      <input type="hidden" name="id" value={postId} />

      <button
        type="submit"
        className="rounded bg-red-600 px-6 py-2 mb-1 text-lg font-medium text-white hover:bg-red-700"
      >
        Delete
      </button>
    </form>
  );
};

export default DeleteButton;
