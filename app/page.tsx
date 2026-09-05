import { createClient } from "@/utils/supabase/server";
import LogoutButton from "@/components/logoutButton";

const HomePage = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="p-10">
      {user ? (
        <div>
          <h1 className="text-2xl font-bold">
            Welcome {user.user_metadata?.full_name}
          </h1>

          <p className="my-3 text-lg">{user.email}</p>

          <LogoutButton />
        </div>
      ) : (
        <div>
          <h1>You are not logged in</h1>

          <a href="/login">Login</a>
        </div>
      )}
    </main>
  );
};

export default HomePage;
