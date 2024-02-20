import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Table } from 'lucide-react'
import React from 'react'

const Repository = () => {

  
  return (
    <main className="flex  flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Open Issues</CardTitle>

        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">123</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Closed Issues</CardTitle>

        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">456</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">+180.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">In Progress Issues</CardTitle>

        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">789</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">+19% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
         
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-gray-500 dark:text-gray-400">+201 since last hour</p>
        </CardContent>
      </Card>
    </div>
    <div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Issue</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Labels</TableHead>
              <TableHead className="text-right">Assignee</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">ISS001</TableCell>
              <TableCell>Open</TableCell>
              <TableCell>Bug</TableCell>
              <TableCell className="text-right">John Doe</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ISS002</TableCell>
              <TableCell>Closed</TableCell>
              <TableCell>Feature Request</TableCell>
              <TableCell className="text-right">Jane Smith</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ISS003</TableCell>
              <TableCell>In Progress</TableCell>
              <TableCell>Enhancement</TableCell>
              <TableCell className="text-right">Bob Johnson</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ISS004</TableCell>
              <TableCell>Open</TableCell>
              <TableCell>Bug</TableCell>
              <TableCell className="text-right">John Doe</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ISS005</TableCell>
              <TableCell>Closed</TableCell>
              <TableCell>Feature Request</TableCell>
              <TableCell className="text-right">Jane Smith</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  </main>
  )
}

export default Repository