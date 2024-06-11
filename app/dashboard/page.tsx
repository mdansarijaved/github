import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

async function Dashboard() {
  const session = await auth();
  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}

export default Dashboard;
