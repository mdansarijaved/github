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
    <div className="w-full h-full bg-white ">
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DashboardCard
              title="Active Repositories"
              description="Your most active GitHub repositories"
              content="10 repositories updated in the last week"
            />
            <DashboardCard
              title="Recent Pull Requests"
              description="Pull requests requiring your attention"
              content="5 open pull requests"
            />
            <DashboardCard
              title="Team Activity"
              description="Recent actions from your team members"
              content="15 commits in the last 24 hours"
            />
            <DashboardCard
              title="CI/CD Status"
              description="Current status of your pipelines"
              content="All pipelines are passing"
            />
            <DashboardCard
              title="Upcoming Deadlines"
              description="Project milestones and deadlines"
              content="2 milestones due this week"
            />
            <DashboardCard
              title="Package Updates"
              description="Available updates for your dependencies"
              content="3 packages have new versions available"
            />
          </div>
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
