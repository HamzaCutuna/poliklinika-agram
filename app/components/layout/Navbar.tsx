import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';

// Navigation items
const navItems = [
  { name: 'Početna', href: '/' },
  { name: 'O nama', href: '/o-nama' },
  { name: 'Usluge', href: '/usluge' },
  { name: 'Oprema', href: '/oprema' },
  { name: 'Doktori', href: '/doktori' },
  { name: 'Novosti', href: '/novosti' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center transition-transform hover:scale-105">
            <Image 
              src="/images/logo.png" 
              alt="Agram Poliklinika Logo" 
              width={80} 
              height={80} 
              className="h-18 w-auto" 
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium transition-all hover:text-primary hover:scale-105"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center">
          <Link href="/kontakt">
            <Button className="transition-all hover:shadow-md hover:translate-y-[-2px]">Naruči se</Button>
          </Link>
          
          {/* Mobile menu button */}
          <button className="ml-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
    </header>
  );
} 