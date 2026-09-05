"use client";

import Link from "next/link";

const EditLink = ({ postId, isLoggedIn }) => {
  const handleClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();

      alert("Please log in first.");
    }
  };

  return (
    <Link
      href={`/posts/${postId}/edit`}
      onClick={handleClick}
      className="rounded bg-blue-600 px-8 py-2 text-lg font-medium  text-white hover:bg-blue-700"
    >
      Edit
    </Link>
  );
};

export default EditLink;
