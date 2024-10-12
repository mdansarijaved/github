import { auth, signIn, signOut } from "@/auth";
import React from "react";
import { Button } from "../ui/button";

async function NavBar() {
  const user = await auth();
  console.log("this is user", user?.user);

  return (
    <div className="w-full py-4 absolute top-0 left-0 z-50 flex justify-evenly items-center">
      <p className="text-3xl font-black  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 ">
        GitStats
      </p>
      {user ? (
        <div className="flex justify-center items-center gap-5">
          <span className="hover:underline text-white cursor-pointer">
            {user.user.login}
          </span>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button className="">SignOut</Button>
          </form>
        </div>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <Button>Login</Button>
        </form>
      )}
    </div>
  );
}

export default NavBar;
