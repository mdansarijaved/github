import { ThemeProvider } from "@/components/theme-provider";
import WorkSpaceSideBar from "@/components/workspace/sidebar";
import WorkspaceSelect from "@/components/workspace/workspaceSelect";
import React, { ReactNode } from "react";

function WorkspaceLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="h-full flex w-full justify-start items-center relative">
        <WorkspaceSelect />
        <WorkSpaceSideBar />
        {children}
      </div>
    </ThemeProvider>
  );
}

export default WorkspaceLayout;
