"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  ChevronLeft,
  ChevronRight,
  GitBranchPlus,
  Home,
  OrbitIcon,
  Projector,
  SquareKanban,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/app/actions/user/user";
import Link from "next/link";
import { ModeToggle } from "../theme-toggle";

function WorkSpaceSideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  const sidebarItems = [
    {
      Icon: <Home size={20} />,
      Name: "Home",
      path: `/workspace`,
    },
    {
      Icon: <Projector size={20} />,
      Name: "Project",
      path: `/workspace/project/`,
    },
    {
      Icon: <SquareKanban size={20} />,
      Name: "Issues",
      path: `/workspace/issues/`,
    },
    {
      Icon: <OrbitIcon size={20} />,
      Name: "Spaces",
      path: `/workspace/spaces/`,
    },
    {
      Icon: <GitBranchPlus size={20} />,
      Name: "Repository",
      path: `/workspace/repository`,
    },
  ];

  return (
    <aside
      className="h-full  border-r w-[--width] flex flex-col justify-between items-center px-2  py-3 transition-all "
      style={
        {
          "--width": isCollapsed ? "4rem" : "16rem",
        } as React.CSSProperties
      }
    >
      <div className="h-full w-full flex flex-col gap-3 justify-start items-start">
        {isCollapsed ? (
          <div className="w-full ">
            <Button
              variant={"outline"}
              className=""
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? (
                <ChevronRight size={16} />
              ) : (
                <ChevronLeft size={16} />
              )}
            </Button>
          </div>
        ) : (
          <div className="w-full text-end flex justify-between items-center pl-3">
            <Link href={"/"} className={`text-xl font-semibold transition-all`}>
              GitStats
            </Link>
            <Button
              variant={"outline"}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? (
                <ChevronRight size={16} />
              ) : (
                <ChevronLeft size={16} />
              )}
            </Button>
          </div>
        )}

        {sidebarItems.map((Item) => (
          <Link
            href={Item.path}
            key={Item.Name}
            className="px-3 py-2  w-full flex text-muted-foreground hover:text-blue-500 justify-start rounded-lg hover:bg-gray-200 transition-all duration-300"
          >
            {isCollapsed ? (
              <span className="">{Item.Icon}</span>
            ) : (
              <p className="flex justify-center items-center gap-3 text-sm ">
                <span className="">{Item.Icon}</span>
                {Item.Name}
              </p>
            )}
          </Link>
        ))}
      </div>
      <div className="w-full flex flex-col justify-center  items-start gap-3">
        <ModeToggle />
        <Avatar>
          <AvatarImage src={user?.avatar_url} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </aside>
  );
}

export default WorkSpaceSideBar;
