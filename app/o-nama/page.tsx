import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative mb-20 rounded-2xl overflow-hidden">
        <div className="h-80 md:h-96 relative">
          <Image
            src="/images/agram.jpg"
            alt="Agram Polyclinic Building"
            fill
            style={{ objectFit: 'cover' }}
            className="brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">O nama</h1>
            <p className="text-lg text-white/90">
              Poliklinika Agram je savremena zdravstvena ustanova koja pruža vrhunske medicinske usluge.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Naša misija</h2>
            <p className="text-muted-foreground">
              Naša misija je da pružimo vrhunske zdravstvene usluge našim pacijentima. Kroz kontinuiranu edukaciju naših liječnika i ulaganje u najmoderniju medicinsku opremu, težimo poboljšati zdravstveni standard i kvalitetu života pacijenata.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Naša vizija</h2>
            <p className="text-muted-foreground">
              Vizija Poliklinike Agram je postati prepoznatljiv centar izvrsnosti u pružanju zdravstvenih usluga, i to kroz stalno unapređenje stručnih znanja, vještina i sposobnosti svih zaposlenika te korištenje najsuvremenije medicinske opreme.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Content */}
      <div className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Poliklinika Agram</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Poliklinika AGRAM u Sarajevu prva je privatna medicinska ustanova iz sistema Specijalne bolnice AGRAM, najvećeg privatnog zdravstvenog sistema u Hrvatskoj i Bosni i Hercegovini.
              </p>
              <p>
                Ujedno, riječ je o najvećoj i najsuvremenijoj privatnoj zdravstvenoj ustanovi i dijagnostičkom centru u regiji.
              </p>
              <p>
              Poliklinika AGRAM pruža širok spektar medicinskih usluga i specijalizirana je za internu medicinu, kardiologiju, gastroenterologiju, opću internu medicinu, radiologiju, ginekologiju, laboratorijsku dijagnostiku, oftalmologiju, citologiju i dermatovenerologiju.
              </p>
            </div>
            
            <div className="flex mt-8 flex-wrap gap-4 justify-center">
              <Link href="/usluge">
                <Button className="transition-all hover:shadow-md hover:translate-y-[-2px]">
                  Naše usluge
                </Button>
              </Link>
              <Link href="/doktori">
                <Button variant="outline" className="transition-all hover:shadow-md hover:translate-y-[-2px]">
                  Upoznajte naš tim
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg"
                alt="Agram Polyclinic Interior"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-105 duration-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[150px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/images/agram2.jpg"
                  alt="Medical Equipment"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="relative h-[150px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Image
                  src="/images/agram.jpg"
                  alt="Medical Staff"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-105 duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Naše vrijednosti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Izvrsnost</h3>
            <p className="text-muted-foreground text-sm">
              Težimo biti najbolji u svemu što radimo, pružajući vrhunsku zdravstvenu njegu i uslugu.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Briga za pacijente</h3>
            <p className="text-muted-foreground text-sm">
              Svaki pacijent zaslužuje punu pažnju i njegu, što je temelj našeg pristupa.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Inovativnost</h3>
            <p className="text-muted-foreground text-sm">
              Kontinuirano unapređujemo naše usluge i tehnologije za najbolju moguću zdravstvenu njegu.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Dostupnost</h3>
            <p className="text-muted-foreground text-sm">
              Osiguravamo lako dostupnu zdravstvenu njegu kada je to našim pacijentima potrebno.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Spremni smo brinuti o vašem zdravlju</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Naš tim stručnjaka je tu za vas. Kontaktirajte nas da dogovorite pregled ili saznate više o našim uslugama.
        </p>
        <Link href="/kontakt">
          <Button size="lg" className="px-8 py-6 text-lg transition-all hover:shadow-md hover:translate-y-[-2px]">
            Zakažite pregled danas
          </Button>
        </Link>
      </div>
    </div>
  );
} 