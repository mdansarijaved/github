'use client'
import React from "react";
import { ModeToggle } from "./theme-toggle";
import { signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth";

import { Button } from "./ui/button";
import Link from "next/link";

const AuthButton = async() => {
  const  session = await getServerSession(); 
  if (session) {
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
    <div className="py-5 px-10 flex justify-between items-center ">
      <Link href={'/'} className=" text-4xl font-black tracking-wider">
        Git<span className="text-red-600">Stats</span>.
      </Link>
      <div className="flex justify-center items-center gap-5">
        <AuthButton />
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
