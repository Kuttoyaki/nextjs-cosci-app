import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
//import AppNavbar from "./components/AppNavbar";
import Navbar01Page from "@/components/navbar-01/navbar-01";

const front = Orbitron({
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "COSCI Merch",
  description: "Lastest product 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {`${front.className}`}
      >
        <Navbar01Page />

        {children}
      </body>
    </html>
  );
}