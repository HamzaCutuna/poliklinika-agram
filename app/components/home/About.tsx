import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export function About() {
  return (
    <section className="py-8 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
                alt="Medical professionals at Agram Polyclinic"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-[10%] -left-[10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-[5%] right-[5%] w-[50%] h-[30%] bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Stats card */}
            <div className="absolute -bottom-10 -right-10 md:right-10 bg-white dark:bg-primary/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg z-20 flex flex-col items-center justify-center w-48 h-48">
              <span className="text-5xl font-bold text-primary">25+</span>
              <span className="text-sm mt-2 text-center">Godina iskustva u pružanju vrhunske zdravstvene zaštite</span>
            </div>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <span className="text-primary font-medium">O nama</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Poliklinika Agram - vaš partner u očuvanju zdravlja
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Poliklinika Agram je moderna zdravstvena ustanova koja pruža kompletnu uslugu 
              preventivnih pregleda i dijagnostičke obrade pacijenata iz različitih oblasti medicine.
              Naš tim vrhunskih medicinskih stručnjaka, opremljen najmodernijom medicinskom 
              opremom, pruža zdravstvene usluge najviše kvalitete.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Vrhunski stručnjaci</h3>
                  <p className="text-sm text-muted-foreground">
                    Naš medicinski tim čine iskusni i visokoobrazovani stručnjaci.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Moderna oprema</h3>
                  <p className="text-sm text-muted-foreground">
                    Opremljeni smo najnovijom medicinskom tehnologijom za precizniju dijagnostiku.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Brza usluga</h3>
                  <p className="text-sm text-muted-foreground">
                    Minimalna čekanja i brzi rezultati dijagnostičkih pretraga.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Personalizirani pristup</h3>
                  <p className="text-sm text-muted-foreground">
                    Individualna pažnja za svakog pacijenta i njegove zdravstvene potrebe.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/o-nama">
                <Button className="px-8">Više o nama</Button>
              </Link>
              <Link href="/kontakt">
                <Button variant="outline" className="px-8">Kontaktirajte nas</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 