import React from "react";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { auth, signIn, signOut } from "@/lib/auth";

const NavBar = async () => {
  const session = await auth();
  return (
    <div className="py-5 px-4 xl:px-10 flex justify-between items-center self-start w-full absolute top-0 inset-x-0 z-20">
      <Link
        href={"/"}
        className="text-2xl xl:text-4xl font-black tracking-wider"
      >
        GitStats.
      </Link>
      <div className="flex justify-center items-center gap-5">
        {session ? (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button>Sign Out</Button>
          </form>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <Button>Sign In</Button>
          </form>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
