import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job Listing",
  description: "Browse available job positions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
