
import authOptions from "@/lib/auth";
import { Button } from "./ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link"
import ButtonIn from "./login";

export async function Landing() {
  const session = await getServerSession(authOptions);
  
 
  return (
    <div  className="">
   
      <h1 className="text-xl font-bold md:text-3xl lg:text-[44px] font-mono">
        Welcome to Github Issue Tracker
      </h1>
      <p className="flex justify-center pt-2">Manage your issues with ease..</p>

      <div className="flex justify-center gap-4 pt-4">
        {
          session ? <Button ><Link href="/dashboard">Dashboard</Link></Button> : <ButtonIn/>
        }
       <div>
        
       </div>
       
      </div>
    </div>
  );
}
