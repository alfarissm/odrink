"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/types";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast({
      title: "Added to cart!",
      description: `1 x ${product.name}`,
    });
  };

  return (
    <Card className="flex flex-col overflow-hidden h-full group">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} className="block overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-ai-hint={product.imageHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex gap-2 mb-2">
            <Badge variant="secondary">{product.category}</Badge>
            <Badge variant="outline">{product.flavorProfile}</Badge>
        </div>
        <Link href={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-xl font-bold text-primary">Rp{product.price.toLocaleString('id-ID')}</p>
        <Button onClick={handleAddToCart} variant="outline" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4"/>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
