import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";
import { ShoppingBasketIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import CountCartItem from "@/app/(front)/components/CountCartItem";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Navbar01Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  return (
    <div className="bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">

          <Link href="/cart">
            <Badge className="p-3 text-sm"><ShoppingBasketIcon/> <CountCartItem/> item (s)</Badge>
          </Link>

            {
              !session && (
                <>
                <Button asChild variant="outline" className="hidden md:inline-flex">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild className="hidden md:inline-flex">
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )

              }
              {
              session && (
                <>
                <div className="flex items-center">
                Hello, {session.user.name || session.user.email}!
                </div>
                <Button variant="destructive" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                </>
              )
            }
            
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar01Page;
