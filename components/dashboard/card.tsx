import { Repository } from "@/validators/types";
import React from "react";
import { RiGitRepositoryLine } from "react-icons/ri";
import { IoIosGitPullRequest } from "react-icons/io";
import { Session } from "inspector";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

export default async function Card({ reposData }: { reposData: Repository }) {
  const session = await getServerSession(authOptions);
  const repourl = await fetch(reposData.url, {
    headers: {
      Authorization: `token ${session?.user.accessToken}`,
    },
  });

  return (
    <div className="w-[450px] h-fit flex justify-start items-start border rounded-xl px-5 py-3 gap-4 ">
      <div className="rounded-full bg-black  dark:bg-white p-2">
        <RiGitRepositoryLine size={40} className="text-white dark:text-black" />
      </div>
      <div className=" space-y-1 ">
        <a href={reposData.url} className="font-semibold">
          {reposData.name}
        </a>
        {reposData.description ? (
          <p className="text-muted-foreground text-xs dark:text-gray-400 line-clamp-1">
            {reposData.description}
          </p>
        ) : (
          <p className="text-muted-foreground text-xs dark:text-gray-400">
            No Description
          </p>
        )}
        <a href={reposData.owner.html_url} className="flex  items-center gap-2">
          <IoIosGitPullRequest />
          {reposData.owner.login}
        </a>
        {reposData.language ? (
          <p className="text-muted-foreground text-xs dark:text-gray-400">
            {reposData.language}
          </p>
        ) : (
          <p className="text-muted-foreground text-xs  text-white dark:text-black">
            no lang
          </p>
        )}
      </div>
    </div>
  );
}
