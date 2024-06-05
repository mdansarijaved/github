import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import TableRowLink from "@/components/tablerown";

import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import {
  GITHUB_PAGINATION_HUNDRED,
  GITHUB_SEARCH_ISSUES_URL,
} from "@/constants/url";

import { Issue } from "@/validators/types";

export default async function Issues({
  params,
}: {
  params: { username: string };
}) {
  const session = await getServerSession(authOptions);

  const USERNAME = params.username;

  const commonQuery = session?.user.login
    ? `+org:${session.user.login}+${GITHUB_PAGINATION_HUNDRED}`
    : `+${GITHUB_PAGINATION_HUNDRED}`;
  const ALL_ISSUES_URL = `https://api.github.com/search/issues?q=assignee:${USERNAME}&type=issue`;
  const ALL_PRS_URL = `https://api.github.com/search/issues?q=assignee:${USERNAME}+type:pr`;

  const TOKEN = session?.user.accessToken;

  const data = await fetch(ALL_ISSUES_URL, {
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  });
  const res = await data.json();

  return (
    <div>
      {" "}
      <main className="flex  flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {/* {entries.total_count ? entries.total_count : 0} */}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Closed Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                In Progress Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{}</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +19% from last month
              </p>
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
                  <TableHead className="">Issue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Labels</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead className="text-center">Assignee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {res &&
                  res.items &&
                  res.items.map((issue: Issue) => (
                    <TableRowLink key={issue.id} issue={issue} />
                  ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  );
}
