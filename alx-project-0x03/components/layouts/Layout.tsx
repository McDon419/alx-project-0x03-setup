import React from "react";
import { LayoutProps } from "@/interface";   // ✅ Added

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      {/* Add header here if you want */}
      <main>{children}</main>
      {/* Add footer here if you want */}
    </div>
  );
}
