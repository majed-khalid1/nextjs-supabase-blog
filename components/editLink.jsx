"use client";

import Link from "next/link";

const EditLink = ({ postId, isLoggedIn }) => {
  const handleClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();

      alert("Log in to edit posts.");
      return null;
    }
  };

  return (
    <Link
      href={`/posts/${postId}/edit`}
      onClick={handleClick}
      className="rounded-md bg-blue-600 px-8 py-2 text-lg font-medium  text-white hover:bg-blue-700"
    >
      Edit
    </Link>
  );
};

export default EditLink;
