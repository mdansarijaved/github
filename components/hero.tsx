"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { useRef } from "react";
import { Button } from "./ui/button";
import { useRouter, useSearchParams } from "next/navigation";

import { ApiResponse } from "@/types/apiresponse";
import Image from "next/image";

const Hero = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = React.useState<ApiResponse>();
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const params = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const userId = params.get("user");
    if (!userId) {
      return;
    }
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        
        if (!response.ok) {
          throw new Error(await response.text());
        }
        const data: ApiResponse = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        const err =
          error &&
          typeof error === "object" &&
          "message" in error &&
          typeof error.message === "object" &&
          error.message &&
          "message" in error.message &&
          typeof error.message.message === "string"
            ? error.message.message
            : "Something went wrong";
        setError(err);
      }
    })();
    setLoading(false);
  }, [params]);
  return (
    <main className="space-y-5">
      <h1 className="text-4xl font-semibold">Search with github Username</h1>
      <form className="flex justify-center items-center gap-4">
        <Input ref={inputRef} type="text" placeholder="Search." />
        <Button
          onClick={(e) => {
            e.preventDefault();
            router.push(`/?user=${inputRef.current?.value}`);
          }}
          className="px-6"
        >
          Search
        </Button>
      </form>
      {isloading ? (
        <h1>Loading...</h1>
      ) : data && !error ? (
        <>
        <div className="flex gap-10 justify-center items-start py-4">
          <Image src={data.avatar_url} width={200} height={200} alt="avatar" className="rounded-full border-2 border-white p-2"/>
          <div className="space-y-2 py-6  ">
          {data.name?<div className="text-lg font-bold">{data.name}</div>:<div className="text-lg font-bold">{data.login}</div>}
         
          <div>{data.bio}</div>
          <div>
            {data.company}
          </div>
          </div>
        </div>
        </>
      ) : (
        error && <h1>{error}</h1>
      )}
    </main>
  );
};

export default Hero;
