import { Suspense } from "react";
import EditPostForm from "@/components/editPostForm";

export default function EditPostPage({ params }) {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-2xl font-semibold">Edit post</h1>

      <Suspense fallback={<p>Loading post...</p>}>
        <EditPostForm params={params} />
      </Suspense>
    </div>
  );
}
