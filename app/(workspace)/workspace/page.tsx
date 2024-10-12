import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

async function Workspace() {
  const user = await auth();
  if (user) {
    redirect(`/workspace/${user.user.id}`);
  }
  redirect("/");
}

export default Workspace;
