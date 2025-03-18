import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function LaboratorijPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src="/images/labaratorija.jpg"
          alt="Laboratorij"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Laboratorij</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Moderna laboratorijska dijagnostika za brze i pouzdane nalaze uz najsuvremeniju tehnologiju.
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Laboratorijska dijagnostika</h2>
          <p className="text-muted-foreground mb-6">
            Laboratorij Poliklinike Agram opremljen je najsuvremenijom dijagnostičkom opremom koja omogućava 
            brzu i preciznu analizu uzoraka. Naš stručni tim medicinskih biohemičara i laboratorijskih tehničara 
            osigurava najvišu kvalitetu usluge.
          </p>
          <p className="text-muted-foreground mb-6">
            Obavljamo širok spektar laboratorijskih pretraga, od osnovnih biohemijskih i hematoloških analiza 
            do specijaliziranih hormonskih, imunoloških i molekularnih testova. Rezultate većine pretraga 
            izdajemo isti dan, a za složenije analize u najkraćem mogućem roku.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/labaratorij.jpg"
            alt="Laboratorijske analize"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Naše laboratorijske usluge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              5 - 25 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Hematološke analize</h3>
            <p className="text-muted-foreground">
              Kompletna krvna slika, sedimentacija eritrocita, koagulacija i drugi 
              hematološki parametri za procjenu općeg zdravstvenog stanja.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              15 - 40 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Biohemijske analize</h3>
            <p className="text-muted-foreground">
              Mjerenje enzima, elektrolita, glukoze, lipida, proteina i drugih biohemijskih 
              parametara za procjenu funkcije organa i metaboličkog stanja.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              35 - 70 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Hormonske analize</h3>
            <p className="text-muted-foreground">
              Mjerenje razine hormona štitnjače, spolnih hormona, hormona nadbubrežne žlijezde 
              i drugih endokrinih žlijezda za procjenu hormonskog statusa.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              40 - 55 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Imunološke analize</h3>
            <p className="text-muted-foreground">
              Testovi za procjenu imunološkog statusa, otkrivanje autoimunih bolesti, 
              alergija i drugih imunoloških poremećaja.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              40 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tumorski markeri</h3>
            <p className="text-muted-foreground">
              Testovi za otkrivanje i praćenje tumora kroz mjerenje specifičnih 
              tumorskih markera u krvi.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              15 - 50 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mikrobiološke analize</h3>
            <p className="text-muted-foreground">
              Identifikacija patogenih mikroorganizama iz različitih uzoraka i 
              testovi osjetljivosti na antibiotike.
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg"
            alt="Moderni laboratorij"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Zašto odabrati naš laboratorij</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Najsuvremenija oprema</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Koristimo najmodernije analizatore renomiranih svjetskih proizvođača koji osiguravaju precizne i pouzdane rezultate.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Stručni tim</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Naš tim čine visokoeducirani medicinski biokemičari i laboratorijski tehničari s dugogodišnjim iskustvom.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Brzi rezultati</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Većinu nalaza izdajemo istog dana, a za hitne slučajeve u što kraćem roku. Nalaze šaljemo i elektroničkim putem.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Sustav kontrole kvalitete</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Provodimo redovite unutarnje i vanjske kontrole kvalitete koje osiguravaju visoku pouzdanost laboratorijskih nalaza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Testimonials */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Iskustva naših pacijenata</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="text-yellow-400 flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            "Imam redovite kontrole krvne slike i uvijek sam oduševljen brzinom i profesionalnošću osoblja 
            u laboratoriju Poliklinike Agram. Rezultate dobijem isti dan, a osoblje je ljubazno i stručno."
          </p>
          <div className="font-medium">Mirza K.</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="text-yellow-400 flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            "Kao dijabetičar redovito kontroliram svoje laboratorijske parametre u Poliklinici Agram. 
            Izrazito sam zadovoljna njihovim profesionalnim pristupom i potpunim objašnjenjem rezultata."
          </p>
          <div className="font-medium">Amela H.</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="text-yellow-400 flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            "Napravila sam kompletni sistematski pregled koji je uključivao i laboratorijske pretrage. 
            Impresionirana sam brzinom, točnošću i profesionalnošću. Preporučujem svima!"
          </p>
          <div className="font-medium">Jasmina D.</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Redovite laboratorijske kontrole</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Redovite laboratorijske kontrole ključne su za prevenciju i rano otkrivanje bolesti. 
          Naručite se na laboratorijske pretrage u Poliklinici Agram i osigurajte pravovremenu brigu o svom zdravlju.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/kontakt">
            <Button className="px-8 transition-all hover:shadow-md hover:translate-y-[-2px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" x2="16" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="2" y2="6"></line>
                <line x1="3" x2="21" y1="10" y2="10"></line>
              </svg>
              Naručite se na pregled
            </Button>
          </Link>
          <Link href="/doktori">
            <Button variant="outline" className="px-8 transition-all hover:shadow-md hover:translate-y-[-2px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M18 21a8 8 0 0 0-16 0"></path>
                <circle cx="10" cy="8" r="5"></circle>
                <path d="M22 20c-2 0-6-2-6-6"></path>
                <path d="M16 3c0 2.3-2 4-4 4-3.4 0-6 2.6-6 6"></path>
              </svg>
              Upoznajte naše liječnike
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 