"use client";

import { deletePost } from "@/actions/posts";

const DeleteButton = ({ postId, isLoggedIn }) => {
  const handleSubmit = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();

      alert("Please log in first.");
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
