"use client";
import React from "react";
import { Input } from "./ui/input";
import { useRef } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleinput = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(inputRef.current?.value);
    router.push(`/users/${inputRef.current?.value}`);
  };
  
  return (
    <main className="space-y-5">
      <h1 className="text-4xl font-semibold">Search with github Username</h1>
      <form
        onSubmit={handleinput}
        className="flex justify-center items-center gap-4"
      >
        <Input ref={inputRef} type="text" placeholder="Search." />
        <Button type="submit" variant={"default"} className="px-6">
          Search
        </Button>
      </form>
    </main>
  );
};

export default Hero;
