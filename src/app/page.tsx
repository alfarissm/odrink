"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import ProductCard from "@/components/product-card";
import { Award, Leaf, Truck, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  const reviews = [
    {
      name: "Budi S.",
      rating: 5,
      review: "SaltyBlue Brews benar-benar mengubah rutinitas pagi saya. Kopi Pagi Kickstart adalah yang terbaik yang pernah saya coba!",
      avatarUrl: "https://placehold.co/100x100.png",
      avatarHint: "man portrait"
    },
    {
      name: "Citra L.",
      rating: 5,
      review: "Saya sangat terkesan dengan kualitas dan kecepatan pengirimannya. Teh Hijau Zen Garden jadi favorit baru saya.",
      avatarUrl: "https://placehold.co/100x100.png",
      avatarHint: "woman portrait"
    },
    {
      name: "Agus W.",
      rating: 4,
      review: "Variannya luar biasa, dan semua yang saya coba enak. Sangat merekomendasikan Smoothie Berry Blast!",
      avatarUrl: "https://placehold.co/100x100.png",
      avatarHint: "man portrait"
    },
  ];

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
            Why Choose SaltyBlue?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-background p-4 rounded-full mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                We source only the finest ingredients from around the world to
                ensure an exceptional taste experience.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-background p-4 rounded-full mb-4">
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
              <div className="bg-background p-4 rounded-full mb-4">
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

      <section className="py-16 md:py-24 bg-background">
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
      
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Apa Kata Pelanggan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="flex flex-col h-full items-center text-center p-6">
                <CardHeader className="p-0 flex flex-col items-center">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src={review.avatarUrl} alt={review.name} data-ai-hint={review.avatarHint} />
                    <AvatarFallback>{review.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <p className="font-semibold text-lg">{review.name}</p>
                   <div className="flex items-center gap-1 justify-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={
                          i < review.rating
                            ? "w-5 h-5 text-yellow-400 fill-yellow-400"
                            : "w-5 h-5 text-muted-foreground/50"
                        }
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 flex-grow">
                  <p className="text-muted-foreground italic">
                    "{review.review}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
