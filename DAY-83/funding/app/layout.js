import { Inter } from "next/font/google";
import "./globals.css";
import "./globalicon.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Session from "@/components/sessionprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Session>
        <Navbar />
        {children}
        <Footer />
        </Session>
      </body>
    </html>
  );
}