import Link from "next/link";
import LogoutButton from "@/components/logoutButton";
import { createClient } from "@/utils/supabase/server";

async function UserContent() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          Welcome {user.user_metadata?.full_name}
        </h1>

        <p className="my-3 text-lg">{user.email}</p>

        <LogoutButton />
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">You are not logged in</h1>

      <Link
        href="/login"
        className="
        mt-4
        inline-block
        rounded
        bg-zinc-900
        px-5
        py-2
        text-white
        hover:bg-zinc-700"
      >
        Login
      </Link>
    </div>
  );
}
export default UserContent;
