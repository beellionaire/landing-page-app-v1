import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/Layouts/ClientLayouts";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing App | Next 15",
  description: "Made by beellionaire.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${font.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
