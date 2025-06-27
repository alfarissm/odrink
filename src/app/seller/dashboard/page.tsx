import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BarChart, Package, ShoppingCart, DollarSign, ArrowUpRight } from "lucide-react"
import { products } from "@/data/products"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SellerDashboardPage() {
    const activeProducts = products.filter(p => p.status === 'Active').length;
    const recentOrders = [
        { id: "ORD001", customer: "Liam Johnson", date: "2023-11-23", status: "Fulfilled", total: "Rp250,000" },
        { id: "ORD002", customer: "Olivia Smith", date: "2023-11-22", status: "Processing", total: "Rp150,000" },
        { id: "ORD003", customer: "Noah Williams", date: "2023-11-21", status: "Fulfilled", total: "Rp350,000" },
        { id: "ORD004", customer: "Emma Brown", date: "2023-11-20", status: "Cancelled", total: "Rp75,000" },
        { id: "ORD005", customer: "James Jones", date: "2023-11-19", status: "Fulfilled", total: "Rp500,000" },
    ].slice(0, 5); 

  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Here's an overview of your store's performance.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">Rp1,250,500,000</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Orders</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Sale</CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">Rp531,000</div>
                    <p className="text-xs text-muted-foreground">+19% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Products</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{activeProducts}</div>
                    <p className="text-xs text-muted-foreground">{products.length} products total</p>
                </CardContent>
            </Card>
        </div>

        <div className="grid gap-6">
             <Card>
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Recent Orders</CardTitle>
                        <CardDescription>A list of your 5 most recent orders.</CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <Link href="/seller/orders">
                            View All
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                   <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentOrders.map((order) => (
                                <TableRow key={order.id}>
                                    <TableCell>
                                        <div className="font-medium">{order.customer}</div>
                                        <div className="text-sm text-muted-foreground">{order.id}</div>
                                    </TableCell>
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
    </div>
  )
}
