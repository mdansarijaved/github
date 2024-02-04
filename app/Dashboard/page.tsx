import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import Image from "next/image";

const Dashboard = async() => {
  const session= await getServerSession(authOptions);
  console.log(session?.user.login)
 if(!session){
  redirect('/');
 }
 return (
  <div className="flex flex-col w-full min-h-screen">
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">

          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link className="font-bold" href="#">
          Issues
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          Repository
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="#">
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
        <Button className="rounded-full" size="icon" variant="ghost">
          <Image
            alt="Avatar"
            className="rounded-full"
            height="32"
            src={session?.user.image ?? ""}
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
          />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </div>
    </header>
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Open Issues</CardTitle>

          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">123</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Closed Issues</CardTitle>

          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">456</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">In Progress Issues</CardTitle>

          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">789</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
           
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+201 since last hour</p>
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
              <TableRow>
                <TableCell className="font-medium">ISS001</TableCell>
                <TableCell>Open</TableCell>
                <TableCell>Bug</TableCell>
                <TableCell className="text-right">John Doe</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ISS002</TableCell>
                <TableCell>Closed</TableCell>
                <TableCell>Feature Request</TableCell>
                <TableCell className="text-right">Jane Smith</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ISS003</TableCell>
                <TableCell>In Progress</TableCell>
                <TableCell>Enhancement</TableCell>
                <TableCell className="text-right">Bob Johnson</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ISS004</TableCell>
                <TableCell>Open</TableCell>
                <TableCell>Bug</TableCell>
                <TableCell className="text-right">John Doe</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ISS005</TableCell>
                <TableCell>Closed</TableCell>
                <TableCell>Feature Request</TableCell>
                <TableCell className="text-right">Jane Smith</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </main>
  </div>
)

}





export default Dashboard