import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import AddToCartForm from "@/components/add-to-cart-form";
import { Tag, Droplets, Leaf, MapPin, NotebookText, GlassWater } from 'lucide-react';

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              data-ai-hint={product.imageHint}
            />
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-4 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                <Badge variant="outline">{product.flavorProfile}</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{product.name}</h1>
            <p className="text-3xl font-light mt-2 text-primary">Rp{product.price.toLocaleString('id-ID')}</p>
          </div>

          <p className="text-lg text-muted-foreground">{product.description}</p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span><strong>Origin:</strong> {product.origin}</span>
              </div>
              {product.dietary !== "None" && (
                <div className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-muted-foreground" />
                    <span><strong>Dietary:</strong> {product.dietary}</span>
                </div>
              )}
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><Droplets className="w-5 h-5" />Tasting Notes</h3>
            <div className="flex flex-wrap gap-2">
              {product.tastingNotes.map(note => (
                <Badge key={note} variant="outline" className="text-sm">{note}</Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><NotebookText className="w-5 h-5" />Ingredients</h3>
            <p className="text-muted-foreground">{product.brewingInstructions}</p>
          </div>
          
          <AddToCartForm product={product} />

        </div>
      </div>
    </div>
  );
}
