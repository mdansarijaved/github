import Card from "@/components/dashboard/card";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import authOptions from "@/lib/auth";
import type { Repository } from "@/validators/types";
import { Table } from "lucide-react";
import { getServerSession } from "next-auth";
import React from "react";

const Repository = async ({ params }: { params: { username: string } }) => {
  const session = await getServerSession(authOptions);

  const username = params.username;

  const user = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${session?.user.accessToken}`,
    },
  });
  const userData = await user.json();
  // console.log(userData);
  const repos = await fetch(`${userData.repos_url}`, {
    headers: {
      Authorization: `token ${session?.user.accessToken}`,
    },
  });
  const reposData: Repository[] = await repos.json();
  // console.log(reposData);

  return (
    <>
      <div className="grid grid-cols-3 place-items-center  gap-4 py-10 px-16">
        {reposData.map((repo, index) => (
          <Card key={index} reposData={repo}  />
        ))}
      </div>
    </>
  );
};

export default Repository;
