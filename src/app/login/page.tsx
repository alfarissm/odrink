import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Mail, Lock, CupSoda } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center bg-muted/20 px-4 py-12 sm:px-6 lg:px-8 min-h-[calc(100vh-12rem)]">
      <div className="w-full max-w-md space-y-8">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="inline-block mx-auto mb-4">
              <Link href="/" className="inline-flex items-center gap-2">
                <CupSoda className="h-10 w-10 text-primary" />
                <span className="font-headline text-3xl font-bold">SaltyBlue Brews</span>
              </Link>
            </div>
            <CardTitle className="text-2xl">Seller Portal Login</CardTitle>
            <CardDescription>Welcome back! Please enter your details.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="pl-10 h-11 text-base"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="password" type="password" required className="pl-10 h-11 text-base" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" size="lg" asChild>
              <Link href="/seller/dashboard">Sign In</Link>
            </Button>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have a seller account?{" "}
              <Link href="/signup" className="underline font-medium hover:text-primary">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
