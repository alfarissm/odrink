import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function SellerOrdersPage() {
  const orders = [
    { id: "ORD001", customer: "Liam Johnson", date: "2023-11-23", status: "Fulfilled", total: "Rp250,000" },
    { id: "ORD002", customer: "Olivia Smith", date: "2023-11-22", status: "Processing", total: "Rp150,000" },
    { id: "ORD003", customer: "Noah Williams", date: "2023-11-21", status: "Fulfilled", total: "Rp350,000" },
    { id: "ORD004", customer: "Emma Brown", date: "2023-11-20", status: "Cancelled", total: "Rp75,000" },
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
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                     <Badge variant={
                        order.status === 'Fulfilled' ? 'default' :
                        order.status === 'Processing' ? 'secondary' : 'destructive'
                      }>{order.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">{order.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
