import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SellerOrdersPage() {
  const orders = [
    { id: "ORD001", customer: "Liam Johnson", date: "2023-11-23", status: "Fulfilled", total: "Rp250,000" },
    { id: "ORD002", customer: "Olivia Smith", date: "2023-11-22", status: "Processing", total: "Rp150,000" },
    { id: "ORD003", customer: "Noah Williams", date: "2023-11-21", status: "Fulfilled", total: "Rp350,000" },
    { id: "ORD004", customer: "Emma Brown", date: "2023-11-20", status: "Cancelled", total: "Rp75,000" },
    { id: "ORD005", customer: "James Jones", date: "2023-11-19", status: "Fulfilled", total: "Rp500,000" },
    { id: "ORD006", customer: "Sophia Garcia", date: "2023-11-18", status: "Fulfilled", total: "Rp120,000" },
    { id: "ORD007", customer: "Benjamin Miller", date: "2023-11-17", status: "Processing", total: "Rp85,000" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Orders</h1>
        <p className="text-muted-foreground">View and manage your customer orders.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Customer Orders</CardTitle>
          <CardDescription>A list of all recent orders.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                      <div className="font-medium">{order.id}</div>
                      <div className="text-sm text-muted-foreground">{order.date}</div>
                  </TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                     <Badge variant={
                        order.status === 'Fulfilled' ? 'default' :
                        order.status === 'Processing' ? 'secondary' : 'destructive'
                      }>{order.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">{order.total}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Update Status</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
