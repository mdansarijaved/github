'use client'
import React from "react";
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";
import {signIn,signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

function AuthButton(){
  const {data: session} = useSession(); 

  if(session){
    console.log(session?.user?.name)
    return (
      <>
       <div className="rounded-full">
        <Image src={session?.user?.image ?? ""} alt="profile" width={40} height={40} className="rounded-full"/>
       </div>
        <br />
        <Button variant={'secondary'} onClick={() => signOut()}>Sign Out</Button>
      </>
    )
  }
  return(
    <Button variant={"default"} onClick={() => signIn()}>Sign In</Button>
  )
}

const NavBar = () => {
  return (
    <div className="py-5 px-10 flex justify-between items-center">
      <h1 className=" text-4xl font-black tracking-wider">
        Git<span className="text-red-600">Stats</span>.
      </h1>
      <div className="flex justify-center items-center gap-5">
      <AuthButton/>
      <ModeToggle />
      </div>

    </div>
  );
};

export default NavBar;
