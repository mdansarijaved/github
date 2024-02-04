import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "./ui/button";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function Landing() {
  const session = await getServerSession(authOptions);
  if (session){
    redirect('/dashboard');
  }
  return(
    <div>
      <h1 className ='text-xl font-bold md:text-3xl lg:text-[44px] font-mono'>Welcome to Github Issue Tracker</h1>
      <p className ='flex justify-center pt-2'>Manage your issues with ease.</p>
      <div className='flex justify-center gap-4 pt-4'>
      <Button variant ={'default'}>Login</Button>
      <Button variant ={'secondary'}>Sign Up</Button>
      </div>
    </div>
  );
}
