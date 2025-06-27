import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SellerAnalyticsPage() {
  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">Insights into your store's performance.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Sales Over Time</CardTitle>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center text-muted-foreground">
                    Sales chart placeholder
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Top Selling Products</CardTitle>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center text-muted-foreground">
                    Top products list placeholder
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Sales by Category</CardTitle>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center text-muted-foreground">
                    Category sales chart placeholder
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Customer Demographics</CardTitle>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center text-muted-foreground">
                    Demographics chart placeholder
                </CardContent>
            </Card>
        </div>
    </div>
  )
}
