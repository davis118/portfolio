import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Davis Mo - Computer Science Student & Developer",
  description:
    "Computer Science student at UT Dallas with expertise in AI research, robotics, and full-stack development. Portfolio showcasing innovative projects and technical skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
