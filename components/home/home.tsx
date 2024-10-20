"use client";
import React, { useRef } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/app/actions/user/user";
import { signIn } from "@/auth";

export function BackgroundBeamsDemo() {
  let divref = useRef(null);
  let anim = useInView(divref);
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  return (
    <div className="h-full w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 z-40">
        <motion.div
          ref={divref}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          initial={false}
          animate={anim ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Start Using GitStats
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque eum
            voluptas quaerat aspernatur, repudiandae est rerum officia, quas
            veritatis eligendi quod laboriosam dolores? Accusamus hic minus
            maxime consectetur, excepturi voluptatem.
          </p>
          <div className="text-center">
            {user ? (
              <Link
                href={`/workspace`}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "relative z-10 mt-4 bg-gradient-to-b from-neutral-200 to-neutral-600 border-none"
                )}
              >
                Start using now
              </Link>
            ) : (
              <button
                onClick={async () => await signIn("github")}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "relative z-10 mt-4 bg-gradient-to-b from-neutral-200 to-neutral-600 border-none"
                )}
              >
                Start using now
              </button>
            )}
          </div>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
