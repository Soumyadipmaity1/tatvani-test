import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Nav from "@/components/Essentials/Navbar";
// import Footer from "@/components/Essentials/Footer";
// import  { Toaster } from 'react-hot-toast';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Nav /> */}
        {children}
        {/* <Toaster /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
