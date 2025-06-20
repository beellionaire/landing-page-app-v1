"use client";

import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const excludedPaths = ["/contact", "/login"];
  const isExcluded = excludedPaths.includes(pathname);

  return (
    <>
      {!isExcluded && <ResponsiveNav />}
      {children}
    </>
  );
}
