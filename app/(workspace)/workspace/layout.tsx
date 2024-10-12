import WorkSpaceSideBar from "@/components/workspace/sidebar";
import React, { ReactNode } from "react";

function WorkspaceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <WorkSpaceSideBar />
      {children}
    </div>
  );
}

export default WorkspaceLayout;
