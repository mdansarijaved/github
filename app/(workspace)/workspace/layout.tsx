import WorkSpaceSideBar from "@/components/workspace/sidebar";
import WorkspaceSelect from "@/components/workspace/workspaceSelect";
import React, { ReactNode } from "react";

function WorkspaceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full flex w-full justify-start items-center">
      <WorkspaceSelect />
      <WorkSpaceSideBar />
      {children}
    </div>
  );
}

export default WorkspaceLayout;
