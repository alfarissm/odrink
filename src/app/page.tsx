"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { products as allProducts } from "@/data/products";
import ProductCard from "@/components/product-card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  const [sortOrder, setSortOrder] = useState("name-asc");

  const sortedProducts = useMemo(() => {
    return [...allProducts].sort((a, b) => {
      switch (sortOrder) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "name-asc":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [sortOrder]);

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
            <Link href="/#products">Explore Our Collection</Link>
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section id="products" className="scroll-mt-20">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Our Brews</h1>
            <div className="flex items-center gap-2">
              <Label htmlFor="sort-by">Sort by</Label>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger id="sort-by" className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                  <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                There are no beverages available.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
