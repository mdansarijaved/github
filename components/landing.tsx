import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import ButtonIn from "./login";
import { cn } from "@/lib/utils";
import { Yeseva_One } from "next/font/google";
import { AppWindowIcon, Github } from "lucide-react";
import { auth } from "@/lib/auth";

const Yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yeseva",
});

export async function Landing() {
  const session = await auth();
  return (
    <div className="flex flex-col items-center justify-center ">
      <Button
        variant={"secondary"}
        className={cn(
          `flex items-center my-5 text-sm text-foreground gap-2`,
          Yeseva.className
        )}
      >
        <AppWindowIcon size={20} /> Introducing GitStats{" "}
      </Button>
      <h1
        className={cn(
          `text-xl font-bold md:text-3xl lg:text-[50px] font-mono`,
          Yeseva.className
        )}
      >
        Track your Github with ease.
      </h1>
      <p className="flex justify-center pt-2">
        GitStats is a fast way to track and manage you github.
      </p>

      <div className="flex justify-center gap-4 pt-4">
        <Link className={cn(buttonVariants())} href={`#`}>
          Get Started
        </Link>
        <Link
          href={"#"}
          className={cn(`px-7`, buttonVariants({ variant: "secondary" }))}
        >
          <Github className="text-black" />
        </Link>
      </div>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
