import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getServerSession, Session } from "next-auth";
import { Butterfly_Kids } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { redirect } from "next/navigation";
import authOptions from "@/lib/auth";
import { json } from "stream/consumers";
import { Repository } from "@/validators/types";

const Dashboard = async ({ params }: { params: { username: string } }) => {
  const session = await getServerSession(authOptions);
  // console.log(session?.user);
  if (!session) {
    redirect("/auth/signin");
  }

  const stats = await fetch(
    `https://api.github.com/users/${session?.user.login}`
  );
  const userData = await stats.json();

  return (
    <>
      <div className=" py-10 mx-auto max-w-4xl w-[800px]">
        <div className="flex justify-start items-start gap-10 h-fit w-full ">
          <Image
            src={session?.user.image ?? ""}
            height={500}
            width={500}
            alt="userimage"
            className="rounded-full w-52 h-52"
          />
          <div className="h-full flex justify-center items-start flex-col">
            <div>
              <a href={session?.user.html_url} className="font-semibold">
                {session?.user.name}
              </a>
              <p>{session?.user.email}</p>
              <div className="flex justify-center items-center gap-5 py-2">
                <p>Followers: {session.user.followers}</p>
                <p>Following: {session.user.following}</p>
                <p>{}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
