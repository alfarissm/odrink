"use client";

import React, { useState, useMemo } from "react";
import { products as allProducts } from "@/data/products";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/product-card";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const categories = ["Coffee", "Tea", "Juice", "Smoothie"];
const flavors = ["Sweet", "Sour", "Bitter", "Fruity", "Earthy"];
const dietaryOptions = ["Vegan", "Gluten-Free", "Sugar-Free"];

export default function Home() {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    flavors: [] as string[],
    dietary: [] as string[],
  });
  const [sortOrder, setSortOrder] = useState("name-asc");

  const handleFilterChange = (
    type: "categories" | "flavors" | "dietary",
    value: string
  ) => {
    setFilters((prev) => {
      const newValues = prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value];
      return { ...prev, [type]: newValues };
    });
  };
  
  const clearFilters = () => {
    setFilters({ categories: [], flavors: [], dietary: [] });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);
      const flavorMatch =
        filters.flavors.length === 0 ||
        filters.flavors.includes(product.flavorProfile);
      const dietaryMatch =
        filters.dietary.length === 0 ||
        filters.dietary.some(d => d === product.dietary);
      return categoryMatch && flavorMatch && dietaryMatch;
    });

    return filtered.sort((a, b) => {
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
  }, [filters, sortOrder]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <aside className="lg:col-span-1 sticky top-24">
          <Card>
            <CardHeader>
              <CardTitle>Filter & Sort</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-lg font-semibold">Category</Label>
                <div className="space-y-2 pt-2">
                  {categories.map((cat) => (
                    <div key={cat} className="flex items-center space-x-2">
                      <Checkbox
                        id={cat}
                        checked={filters.categories.includes(cat)}
                        onCheckedChange={() =>
                          handleFilterChange("categories", cat)
                        }
                      />
                      <Label htmlFor={cat} className="font-normal">{cat}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Label className="text-lg font-semibold">Flavor Profile</Label>
                <div className="space-y-2 pt-2">
                  {flavors.map((flavor) => (
                    <div key={flavor} className="flex items-center space-x-2">
                      <Checkbox
                        id={flavor}
                        checked={filters.flavors.includes(flavor)}
                        onCheckedChange={() => handleFilterChange("flavors", flavor)}
                      />
                      <Label htmlFor={flavor} className="font-normal">{flavor}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Label className="text-lg font-semibold">Dietary Needs</Label>
                <div className="space-y-2 pt-2">
                  {dietaryOptions.map((diet) => (
                    <div key={diet} className="flex items-center space-x-2">
                      <Checkbox
                        id={diet}
                        checked={filters.dietary.includes(diet)}
                        onCheckedChange={() => handleFilterChange("dietary", diet)}
                      />
                      <Label htmlFor={diet} className="font-normal">{diet}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <Button onClick={clearFilters} variant="secondary" className="w-full">Clear Filters</Button>
            </CardContent>
          </Card>
        </aside>

        <main className="lg:col-span-3">
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
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No beverages match your criteria.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
