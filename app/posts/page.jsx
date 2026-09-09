import RecentlyViewedPosts from "@/components/recently-viewed-posts";
import { Suspense } from "react";
import { PostList } from "@/components/PostList";
import AuthGuard from "@/components/authGuard";
import CreatePostSection from "@/components/createPostSection";
const PostsPage = async () => {
  return (
    <div className="space-y-8">
      <section className="text-center text-4xl font-semibold">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl my-6">
          Blog Posts
        </h1>

        {/* Everyone can view posts */}
        <div className="my-16">
          <Suspense fallback={<p>Loading posts...</p>}>
            <PostList />
          </Suspense>
        </div>

        {/* Everyone can view recently viewed posts */}
        <div className="my-16">
          <Suspense fallback={<p>Loading recently viewed posts...</p>}>
            <RecentlyViewedPosts />
          </Suspense>
        </div>
      </section>
      {/* Only logged-in users can create posts */}
      <section className="space-y-4 border-t border-zinc-200 pt-6">
        <Suspense fallback={<p className="text-center">Checking login...</p>}>
          <AuthGuard>
            <div className="mx-auto max-w-4xl p-6 ">
              <h1 className="mb-6 text-2xl font-semibold">New post</h1>

              <CreatePostSection />
            </div>
          </AuthGuard>
        </Suspense>
      </section>
    </div>
  );
};

export default PostsPage;
