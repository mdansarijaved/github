import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import Image from "next/image";
import { Suspense } from "react";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  const response = await fetch(
    `https://api.github.com/search/issues?q=author:${session?.user.login}`,
    // `https://api.github.com/search/issues?q=author:pallabez`,
    {
      headers: {
        Authorization: `token ${session?.user.accessToken}`,
      },
    }
  );
  const data = await response.json();
  // console.log(data);
  console.log(data.total_count);

  const closedIssues = data?.items.reduce(
    (acc: number, issue: any) => acc + (issue.state === "closed" ? 1 : 0),
    0
  );
  const inProgess = data?.items.reduce(
    (acc: number, issues: any) => acc + (issues.state === "open" ? 1 : 0),
    0
  );

  if (!session) {
    redirect("/");
  }
  return (
    // <Suspense fallback={<div>Loading...</div>}>
      <main className="flex  flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {data.total_count ? data.total_count : null}
              </div>
              {/* <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Closed Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{closedIssues}</div>
              {/* <p className="text-xs text-gray-500 dark:text-gray-400">+180.1% from last month</p> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                In Progress Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{inProgess}</div>
              {/* <p className="text-xs text-gray-500 dark:text-gray-400">+19% from last month</p> */}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Issue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Labels</TableHead>
                  <TableHead className="text-right">Assignee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <Suspense fallback={<div>Loading...</div>}>
                {data.items.map((issue: any) => (
                  <TableRow key={issue.id}>
                    <TableCell className="font-medium">{issue.id}</TableCell>
                    <TableCell>{issue.state}</TableCell>
                    <TableCell>{issue.label ? issue.label : "null"}</TableCell>
                    <TableCell className="text-right">
                      {issue.assignee ? issue.assignee : "self"}
                    </TableCell>
                  </TableRow>
                ))}
                </Suspense>
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    // </Suspense>
  );
};

export default Dashboard;
