 
import { TableCell, TableRow } from "@/components/ui/table";
import { Session } from "next-auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const TableRowLink = ({issue,issueLink}:{issue:any,issueLink:string}) => {
    
  return (
    <TableRow key={issue.id} >
      <TableCell className="font-medium ">
        <Link className="hover:underline" href={issueLink}>
        {issue.title}
        </Link>
        </TableCell>

      <TableCell>{issue.state}</TableCell>
      <TableCell>{issue.label ? issue.label : "null"}</TableCell>
      <TableCell>
        {/* {issue.state === "open" ? "InProgress" : "Completed"} */}
        <span className="w-full block max-w-28 rounded-xl overflow-hidden  border bg-muted ">
            <span style={{
                width: `${issue.state === "open" ? "50%" : "100%"}`,
            }} className=" block   py-1  bg-white " />
        </span>
      </TableCell>
      <TableCell className="text-center">
        {issue.assignee ? issue.assignee.login : "null"}
      </TableCell>
    </TableRow>
  );
};

export default TableRowLink;
