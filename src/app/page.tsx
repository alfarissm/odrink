"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/product-card";
import { Award, Leaf, Truck } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

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

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Brews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose SaltyBlue?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                We source only the finest ingredients from around the world to
                ensure an exceptional taste experience.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Leaf className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Sustainably Sourced
              </h3>
              <p className="text-muted-foreground">
                Our commitment to ethical and sustainable practices means every
                sip supports a healthier planet.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Truck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Fast &amp; Fresh Delivery
              </h3>
              <p className="text-muted-foreground">
                Enjoy your favorite brews delivered fresh to your doorstep with
                our reliable and speedy shipping.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
