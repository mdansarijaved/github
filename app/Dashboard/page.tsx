import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import TableRowLink from "./components/tablerown";
import { fetchData } from "@/lib/utils";
import PaginationComponent from "./components/pagination";

const Dashboard = async ({searchParams}:{searchParams:{[key: string]: string | string[] | undefined}}) => {
  const session = await getServerSession(authOptions);
  const entries = await fetchData('https://api.github.com/search/issues?q=repo:facebook/react+type:issue')

  // console.log(data);
  // console.log(data); 
  const page = searchParams['page']??'1'; 
  const per_page= searchParams['per_page']??'10';

  const start = (Number(page) - 1) * Number(per_page);  
  const end = start + Number(per_page);

  const  data = entries.items.slice(start, end);


  const closedIssues = entries?.items.reduce(
    (acc: number, issue: any) => acc + (issue.state === "closed" ? 1 : 0),
    0
  );
  const inProgess = entries?.items.reduce(
    (acc: number, issues: any) => acc + (issues.state === "open" ? 1 : 0),
    0
  );

  if (!session) {
    redirect("/");
    return null;
  }
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <main className="flex  flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
              {/* <Suspense fallback={<div>Loading...</div>}> */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {entries.total_count ? entries.total_count : 0}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Closed Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{closedIssues}</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+180.1% from last month</p>
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
            <p className="text-xs text-gray-500 dark:text-gray-400">+19% from last month</p>
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
                {data.map((issue: any) => (
                  // <Link href={`/issues/${issue.id}`} key={issue.id}>
                  <TableRowLink
                    key={issue.id}
                    issue={issue}
                    issueLink={issue.html_url}
                    // session={session}
                  />
                  // </Link>
                ))}
            </TableBody>
          </Table>
        </Card>
      </div>
              {/* </Suspense> */}
              <PaginationComponent hasNextPage={true} hasPreviousPage={true} />
    </main>
    // </Suspense>
  );
};

export default Dashboard;
