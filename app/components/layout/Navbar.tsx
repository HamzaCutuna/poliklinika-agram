"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center transition-transform hover:scale-105">
            <Image 
              src="/images/logo.png" 
              alt="Agram Poliklinika Logo" 
              width={80} 
              height={80} 
              className="h-12 w-auto md:h-16" 
              priority
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-2">
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
        
        <div className="flex items-center space-x-4">
          <Link href="/kontakt">
            <Button className="transition-all hover:shadow-md hover:translate-y-[-2px]">Naruči se</Button>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
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
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium transition-all hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
} 