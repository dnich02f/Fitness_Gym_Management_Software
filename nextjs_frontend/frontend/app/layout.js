import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 title: 'Gym Management Software',
 description: 'A comprehensive gym management solution.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <nav><Navigation/></nav>
    {children}
    </body>
    </html>
  );
}
