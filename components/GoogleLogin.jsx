"use client";

import { createClient } from "@/utils/supabase/client";

const GoogleLogin = () => {
  const handleGoogleLogin = async () => {
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",

      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    });

    if (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="text-base rounded-lg border px-5 py-3 font-medium"
    >
      Continue with Google
    </button>
  );
};

export default GoogleLogin;
