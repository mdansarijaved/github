import { Button } from "./ui/button";
export function Landing() {
  return(
    <div>
      <h1 className ='text-xl font-bold md:text-3xl lg:text-[44px]'>Welcome to Github Issue Tracker</h1>
      <p className ='flex justify-center pt-5'>Manage your issues with ease.</p>
      <div className='flex justify-center gap-4 pt-4'>
      <Button variant ={'default'}>Login</Button>
      <Button variant ={'secondary'}>Sign Up</Button>
      </div>
    </div>
  );
}
