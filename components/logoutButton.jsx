"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/login");

    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded bg-red-500 px-4 py-2 text-white mt-3"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
