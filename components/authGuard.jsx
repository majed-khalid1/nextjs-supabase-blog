import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

const AuthGuard = async ({ children }) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return (
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-semibold">
          You must be logged in to edit on posts.
        </h1>

        <p className="mt-3 text-zinc-600">Please log in to continue.</p>

        <Link
          href="/login"
          className="mt-6 inline-block rounded bg-black px-5 py-2 text-white"
        >
          Log In
        </Link>
      </div>
    );
  }

  return children;
};

export default AuthGuard;
