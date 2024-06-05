"use client";
import React from "react";
import { ModeToggle } from "./theme-toggle";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";

const AuthButton = () => {
  const session = useSession();

  if (session.status == "authenticated") {
    const { user } = session.data;
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger className="">
            <div className="rounded-full">
              <Image
                alt="Avatar"
                className="rounded-full"
                height="32"
                src={user.image ?? ""}
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
              <span className="sr-only">Toggle user menu</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border border-gray-200 px-2 py-2 rounded bg-white mx-6">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>
              <span onClick={() => signOut()}>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  }
  return (
    <Button variant={"default"} onClick={() => signIn()}>
      Sign In
    </Button>
  );
};

const NavBar = () => {
  return (
    <div className="py-5 px-4 xl:px-10 flex justify-between items-center self-start w-full absolute top-0 inset-x-0 z-20">
      <Link
        href={"/"}
        className="text-2xl xl:text-4xl font-black tracking-wider"
      >
        Git<span className="text-violet-600">Stats</span>.
      </Link>
      <div className="flex justify-center items-center gap-5">
        <AuthButton />
        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
