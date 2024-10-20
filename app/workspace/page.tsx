import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WorkspaceSelect from "@/components/workspace/workspaceSelect";
import React from "react";

function WorkspaceUser({ params }: { params: { userName: string } }) {
  return (
    <div className="w-full h-full ">
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6 pt-16 lg:pt-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        </main>
      </div>
    </div>
  );
}

export default WorkspaceUser;
function DashboardCard({
  title,
  description,
  content,
}: {
  title: string;
  description: string;
  content: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
}
