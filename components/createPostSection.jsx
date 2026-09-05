import { createClient } from "@/utils/supabase/server";
import CreatePostForm from "@/components/createPostForm";

const CreatePostSection = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <CreatePostForm isLoggedIn={!!user} />;
};

export default CreatePostSection;
