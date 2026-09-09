import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

const AuthGuard = async ({ children }) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-4xl p-6 text-center">
        <p className="text-zinc-600">
          Log in to create, edit, or delete posts.
        </p>

        <Link
          href="/login"
          className="mt-4 inline-block rounded bg-zinc-900 px-5 py-2 text-white hover:bg-zinc-700"
        >
          Login
        </Link>
      </div>
    );
  }

  return children;
};

export default AuthGuard;
