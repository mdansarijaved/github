import Link from "next/link";
import { cn } from "../../lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col w-full h-full pt-20 ">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link className="font-bold" href="/dashboard">
            Issues
          </Link>
          <Link
            className="text-gray-500 dark:text-gray-400"
            href="/dashboard/repos"
          >
            Repository
          </Link>
          <Link
            className="text-gray-500 dark:text-gray-400"
            href="/dashboard/projects"
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
      {children}
    </div>
  );
}
