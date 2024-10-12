"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Home,
  OrbitIcon,
  Projector,
  SquareKanban,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/app/actions/user/user";

function WorkSpaceSideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  const sidebarItems = [
    {
      Icon: <Home />,
      Name: "Home",
    },
    {
      Icon: <Projector />,
      Name: "Project",
    },
    {
      Icon: <SquareKanban />,
      Name: "Issues",
    },
    {
      Icon: <OrbitIcon />,
      Name: "Spaces",
    },
  ];

  return (
    <div
      className="h-full border-r w-[--width] flex flex-col justify-between items-center px-2  py-10 transition-all duration-300"
      style={
        {
          "--width": isCollapsed ? "4rem" : "16rem",
        } as React.CSSProperties
      }
    >
      <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
        {sidebarItems.map((Item) => (
          <div
            key={Item.Name}
            className="px-3 py-2  w-full flex text-muted-foreground hover:text-blue-500 justify-start rounded-lg hover:bg-gray-300 transition-all duration-300"
          >
            {isCollapsed ? (
              <span className="">{Item.Icon}</span>
            ) : (
              <p className="flex justify-center items-center gap-3 ">
                <span className="">{Item.Icon}</span>
                {Item.Name}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col justify-center  items-start gap-3">
        <Avatar>
          <AvatarImage src={user?.avatar_url} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="w-full text-end">
          <Button
            variant={"outline"}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WorkSpaceSideBar;
