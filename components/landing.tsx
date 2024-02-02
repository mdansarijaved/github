import { Button } from "./ui/button";
export function Landing() {
  return(
    <div>
      <h1 className ='text-[44px] font-bold'>Welcome to Github Issue Tracker</h1>
      <p className ='flex justify-center'>Manage your issues with ease.</p>
      <div className='flex justify-center gap-4 pt-4'>
      <Button variant ={'default'}>Login</Button>
      <Button variant ={'secondary'}>Sign Up</Button>
      </div>
    </div>
  )
}