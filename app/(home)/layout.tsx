import NavBar from "@/components/home/navbar";
import React, { ReactNode } from "react";

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <NavBar />
      {children}
    </div>
  );
}

export default HomeLayout;
