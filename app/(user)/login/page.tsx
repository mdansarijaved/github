import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

async function Login() {
  const user = await auth();
  if (user) {
    redirect("/");
  }
  return (
    <div className="w-full h-full bg-black">
      <div className="w-full h-full bg-red-500"></div>
      <div className="w-full h-full bg-green-500"></div>
    </div>
  );
}

export default Login;
