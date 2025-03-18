import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 translate-y-1/4">
        <div className="h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4">
        <div className="h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="block">Vaše zdravlje,</span>
              <span className="block text-primary">naša briga</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Poliklinika Agram je moderna zdravstvena ustanova koja pruža kompletnu uslugu
              preventivnih pregleda i dijagnostičke obrade pacijenata.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start justify-center">
              <Link href="/kontakt">
              <Button size="lg" className="px-8 py-6 text-lg">
                Zakaži pregled
              </Button>
              </Link>
              <Link href="/usluge">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                Naše usluge
              </Button>
              </Link>
              
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 md:justify-start">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Godina iskustva</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Stručnjaka</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">30k+</p>
                <p className="text-sm text-muted-foreground">Zadovoljnih pacijenata</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/agram3.jpg"
                alt="Medical professional"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-2xl"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src="/images/nina.jpg"
                    alt="Doctor"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">Dr. Nina Jurić</h3>
                  <p className="text-sm text-muted-foreground">Citolog</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <svg 
                    className="h-4 w-4 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg 
                    className="h-4 w-4 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg 
                    className="h-4 w-4 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg 
                    className="h-4 w-4 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg 
                    className="h-4 w-4 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="mt-2 text-sm">
                  &ldquo;Odlazak na redovni godišnji pregled znači spašavanje ljudskog života. Odvojite vrijeme za sebe i svoje zdravlje&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 