 
import { TableCell, TableRow } from "@/components/ui/table";
import { Issue } from "@/validators/types";
import { Session } from "next-auth";
import { Span } from "next/dist/trace";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
type TableRowLinkProps = {
  issue: Issue;
};
const TableRowLink : React.FC<TableRowLinkProps> = ({issue}) => {
    
  return (
    <TableRow key={issue.id} >
      <TableCell className="font-medium ">
        <Link className="hover:underline" href={issue.html_url}>
        {issue.title}
        </Link>
        </TableCell>

      <TableCell>{issue.state}</TableCell>
      <TableCell>{issue.labels ? issue.labels.map((label) => (<span key={label.id}>{label.name}</span>)) : "null"}</TableCell>
      <TableCell>
        {/* {issue.state === "open" ? "InProgress" : "Completed"} */}
        <span className="w-full block max-w-28 rounded-xl overflow-hidden  border bg-muted ">
            <span style={{
                width: `${issue.state === "open" ? "50%" : "100%"}`,
            }} className=" block   py-1  bg-neutral-400 " />
        </span>
      </TableCell>
      <TableCell className="text-center">
        {issue.assignee ? issue.assignee.login : "null"}
      </TableCell>
    </TableRow>
  );
};

export default TableRowLink;
