'use client'
import React from "react";
import { ModeToggle } from "./theme-toggle";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";


const AuthButton = () => {
  const session = useSession();
  if (session.status == 'authenticated') {
    return (
      <>
        <div className="rounded-full"></div>
        <br />
        <Button variant={"secondary"} onClick={() => signOut()}>
          Sign Out
        </Button>
      </>
    );
  }
  return (
    <Button variant={"default"} onClick={() => signIn()}>
      Sign In
    </Button>
  );
}

const NavBar = () => {
  return (
    <div className="py-5 px-4 xl:px-10 flex justify-between items-center self-start w-full absolute top-0 inset-x-0 z-20">
      <Link href={'/'} className="text-2xl xl:text-4xl font-black tracking-wider">
        Git<span className="text-violet-600">Stats</span>.
      </Link>
      <div className="flex justify-center items-center gap-5">
        <AuthButton  />
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
