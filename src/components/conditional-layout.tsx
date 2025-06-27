'use client';

import { usePathname } from 'next/navigation';
import Header from "@/components/header";
import Footer from "@/components/footer";
import React from 'react';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSellerPage = pathname.startsWith('/seller');

  if (isSellerPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
