"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Repository = {
  id: number;
  node_id: string;
  name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  ssh_url: string;
  clone_url: string;
  topics: string[];
  visibility: "public" | "private";
  forks: number;
  open_issues: number;
  default_branch: string;
};

export const columns: ColumnDef<Repository>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "visibility",
    header: "Visibility",
  },
  {
    accessorKey: "default_branch",
    header: "Default_branch",
  },
];
