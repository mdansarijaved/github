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
  const [activeTab, setActiveTab] = useState();
  if (!session.data?.user) {
    return null;
  }
  const { user } = session.data;

  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link className="font-bold" href={`/dashboard/issues/${user.login}`}>
          Issues
        </Link>
        <Link
          className="text-gray-500 dark:text-gray-400"
          href={`/dashboard/repos/${user.login}`}
        >
          Repository
        </Link>
        <Link
          className="text-gray-500 dark:text-gray-400"
          href={`/dashboard/projects/${user.login}`}
        >
          Projects
        </Link>
      </nav>
      <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="flex-1 ml-auto sm:flex-initial">
          <div className="relative">
            <Input
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              placeholder="Search issues..."
              type="search"
            />
          </div>
        </form>
     
      </div>
    </header>
  );
}
