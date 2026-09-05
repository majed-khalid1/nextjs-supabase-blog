"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// CREATE POST
export async function createPost(formData) {
  const supabase = await createClient();
  // Check if user is logged in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not logged in → stop here
  if (!user) {
    return;
  }

  // Logged in → continue
  const title = formData.get("title");
  const body = formData.get("body");

  const { error } = await supabase.from("posts").insert({
    title,
    body,
  });

  if (error) {
    console.error("Create error:", error);
    return;
  }

  revalidatePath("/posts");
}

// UPDATE POST
export async function updatePost(formData) {
  const supabase = await createClient();

  // Check if user is logged in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not logged in → stop here
  if (!user) {
    return;
  }

  // Logged in → continue
  const id = formData.get("id");
  const title = formData.get("title");
  const body = formData.get("body");

  const { error } = await supabase
    .from("posts")
    .update({
      title,
      body,
    })
    .eq("id", id);

  if (error) {
    console.error("Update error:", error);
    return;
  }

  redirect("/posts");
}

// DELETE POST
export async function deletePost(formData) {
  const supabase = await createClient();
  // Check if user is logged in
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not logged in → stop here
  if (!user) {
    return;
  }

  // Logged in → continue
  const id = formData.get("id");

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    console.error("Delete error:", error);
    return;
  }

  redirect("/posts");
}
