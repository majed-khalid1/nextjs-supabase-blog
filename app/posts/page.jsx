import RecentlyViewedPosts from "@/components/recently-viewed-posts";
import { Suspense } from "react";
import { PostList } from "@/components/PostList";
import AuthGuard from "@/components/authGuard";
import CreatePostSection from "@/components/createPostSection";
const PostsPage = async () => {
  return (
    <Suspense fallback={<p className="mt-10 text-center">Checking login...</p>}>
      <AuthGuard>
        <div className="space-y-8">
          <section className="text-center text-4xl font-semibold">
            <h1 className="text-center text-4xl font-smibold text-zinc-950 sm:text-5xl my-6">
              page
            </h1>
            <div className="my-16">
              <Suspense fallback={<p>Loading posts...</p>}>
                <PostList />
              </Suspense>
            </div>
            <div className="my-16">
              <Suspense fallback={<p>Loading recently viewed posts...</p>}>
                <RecentlyViewedPosts />
              </Suspense>
            </div>
          </section>

          <section className="space-y-4 border-t border-zinc-200 pt-6">
            <div className="mx-auto max-w-4xl p-6 ">
              <h1 className="mb-6 text-2xl font-semibold">New post</h1>

              <Suspense fallback={<p>Loading...</p>}>
                <CreatePostSection />
              </Suspense>
            </div>
          </section>
        </div>
      </AuthGuard>
    </Suspense>
  );
};

export default PostsPage;
