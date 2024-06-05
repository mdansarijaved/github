"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export default function DashboardHeader() {
  const session = useSession();
  const [activeTab, setActiveTab] = useState<string>("Profile");
  if (!session.data?.user) {
    return null;
  }
  const { user } = session.data;
  const handleActivetab = (tagName: string) => {
    setActiveTab(tagName);
  };
  return (
    <main className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <div className=" flex-col  hidden  text-lg font-medium md:flex md:flex-row md:items-center md:gap-6 md:text-sm lg:gap-6">
        <Link
          href={"/dashboard"}
          onClick={() => handleActivetab("Profile")}
          className={`${
            activeTab === "Profile"
              ? "border-b-2 border-black   dark:border-white  "
              : "text-neutral-500"
          }    px-3 font-bold py-1 `}
        >
          Profile
        </Link>
        <Link
          className={`${
            activeTab === "Issues"
              ? "border-b-2 border-black    dark:border-white  "
              : "text-neutral-500"
          }    px-3 font-bold py-1`}
          onClick={() => handleActivetab("Issues")}
          href={`/dashboard/issues/${user.login}`}
        >
          Issues
        </Link>
        <Link
          className={`${
            activeTab === "Repository"
              ? "border-b-2 border-black    dark:border-white  "
              : "text-neutral-500"
          }    px-3 font-bold py-1 `}
          href={`/dashboard/repos/${user.login}`}
          onClick={() => handleActivetab("Repository")}
        >
          Repository
        </Link>
        <Link
          className={`${
            activeTab === "Projects"
              ? "border-b-2 border-black dark:border-white  "
              : "text-neutral-500"
          }    px-3 font-bold py-1`}
          href={`/dashboard/projects/${user.login}`}
          onClick={() => handleActivetab("Projects")}
        >
          Projects
        </Link>
      </div>
    </main>
  );
}
