"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white bg-background">
        <Image
          src="https://placehold.co/1200x600.png"
          alt="A collection of various beverages"
          fill
          className="absolute inset-0 z-0 object-cover"
          data-ai-hint="coffee beans beverage"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="z-20 relative max-w-3xl px-4">
          <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight">
            Discover Your Perfect Brew
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            From robust coffees to delicate teas and refreshing juices, explore
            our curated selection of fine beverages crafted with passion.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/products">Explore Our Collection</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
