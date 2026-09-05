"use client";

import { useEffect } from "react";

const TrackRecentlyViewed = ({ post }) => {
  useEffect(() => {
    const cookieName = "RecentlyViewedPosts";

    const cookies = document.cookie.split("; ");

    const existingCookie = cookies.find((cookie) =>
      cookie.startsWith(`${cookieName}=`),
    );

    let posts = [];

    if (existingCookie) {
      try {
        const value = existingCookie.split("=")[1];

        posts = JSON.parse(decodeURIComponent(value));
      } catch {
        posts = [];
      }
    }

    // Remove the post if it already exists
    posts = posts.filter((item) => item.id !== post.id);

    // Add the newest post at the beginning
    posts.unshift(post);

    // Keep only the last 5 posts
    posts = posts.slice(0, 5);

    document.cookie = `${cookieName}=${encodeURIComponent(
      JSON.stringify(posts),
    )}; path=/; max-age=${60 * 60 * 24 * 30}`;
  }, [post]);

  return null;
};

export default TrackRecentlyViewed;
