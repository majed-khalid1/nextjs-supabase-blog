import { cookies } from "next/headers";

const RecentlyViewedPosts = async () => {
  const cookiesStore = await cookies();

  const recentlyViewedPosts = cookiesStore.get("RecentlyViewedPosts");

  return (
    <div>
      <h2>Recently Viewed Posts</h2>

      <ul>
        {recentlyViewedPosts ? (
          JSON.parse(recentlyViewedPosts.value).map((post, index) => (
            <li key={`${post.id}-${index}`}>{post.title}</li>
          ))
        ) : (
          <p>No recently viewed posts.</p>
        )}
      </ul>
    </div>
  );
};

export default RecentlyViewedPosts;
