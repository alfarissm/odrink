import Link from 'next/link';
import { CupSoda, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="inline-flex items-center space-x-2 mb-4">
              <CupSoda className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold text-foreground">SaltyBlue Brews</span>
            </Link>
            <p className="text-sm">A curated selection of fine beverages.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/login" className="hover:text-primary transition-colors">Seller Login</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SaltyBlue Brews. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
