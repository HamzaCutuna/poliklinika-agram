import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function OpcaInternaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src="https://images.pexels.com/photos/6823562/pexels-photo-6823562.jpeg"
          alt="Opća interna medicina"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Opća interna medicina</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Sveobuhvatna dijagnostika i liječenje bolesti unutarnjih organa uz vrhunske interniste.
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Specijalistički internistički pregledi</h2>
          <p className="text-muted-foreground mb-6">
            Interna medicina je grana medicine koja se bavi dijagnostikom i liječenjem bolesti unutarnjih organa 
            odraslih osoba. U Poliklinici Agram nudimo sveobuhvatnu internističku skrb, od preventivnih 
            pregleda do naprednih dijagnostičkih postupaka i praćenja kroničnih bolesti.
          </p>
          <p className="text-muted-foreground mb-6">
            Naš tim iskusnih internista koristi najsuvremeniju opremu i primjenjuje najnovije medicinske spoznaje 
            kako bi vam pružio najbolju moguću skrb za vaše zdravlje.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/kontakt">
              <Button className="transition-all hover:shadow-md hover:translate-y-[-2px]">
                Naručite se na pregled
              </Button>
            </Link>
            <Link href="/doktori">
              <Button variant="outline" className="transition-all hover:shadow-md hover:translate-y-[-2px]">
                Upoznajte naše interniste
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/interna.jpg"
            alt="Internistički pregled"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Naše usluge opće interne medicine</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              65 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/stethoscope.svg"
                alt="Kompletan internistički pregled ikona"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Kompletan internistički pregled</h3>
            <p className="text-muted-foreground">
              Temeljiti pregled koji uključuje detaljnu anamnezu, fizikalni pregled, 
              mjerenje vitalnih parametara i interpretaciju nalaza.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              55 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Preventivni pregled</h3>
            <p className="text-muted-foreground">
              Pregled usmjeren na rano otkrivanje zdravstvenih problema 
              i procjenu rizičnih faktora za razvoj bolesti.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              15 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">EKG s interpretacijom</h3>
            <p className="text-muted-foreground">
              Snimanje električne aktivnosti srca koje pomaže u dijagnostici 
              srčanih aritmija, ishemije i drugih srčanih stanja.
            </p>
          </div>
        </div>
      </div>

      {/* Common conditions */}
      <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Stanja koja liječimo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Kardiovaskularne bolesti</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje hipertenzije, koronarne bolesti, aritmija i drugih bolesti srca i krvnih žila.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Respiratorne bolesti</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje astme, KOPB-a, pneumonije i drugih bolesti dišnog sustava.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Gastrointestinalne bolesti</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje bolesti želuca, crijeva, jetre, gušterače i drugih probavnih organa.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Hematološke bolesti</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje anemije, poremećaja zgrušavanja krvi i drugih hematoloških poremećaja.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Metabolički poremećaji</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje dijabetesa, dislipidemije, metaboličkog sindroma i gihta.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Autoimune bolesti</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje reumatoidnog artritisa, sistemskog lupusa, vaskulitisa i drugih autoimunih stanja.
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/interna1.jpg"
            alt="Moderna internistička oprema"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Zašto odabrati našu internu medicinu</h2>
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
                <h3 className="font-medium">Iskusni internisti</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Naši specijalisti interne medicine imaju dugogodišnje iskustvo i kontinuirano se usavršavaju u svom području.
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
                <h3 className="font-medium">Sveobuhvatna dijagnostika</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Koristimo najsuvremenije dijagnostičke metode i opremu za preciznu dijagnostiku raznih internističkih stanja.
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
                <h3 className="font-medium">Individualni pristup</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Svakom pacijentu pristupamo individualno, uzimajući u obzir sve aspekte njegovog zdravstvenog stanja.
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
                <h3 className="font-medium">Multidisciplinarni pristup</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Uska suradnja s drugim specijalnostima omogućava nam pružanje integrirane zdravstvene skrbi.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/kontakt">
              <Button className="transition-all hover:shadow-md hover:translate-y-[-2px]">
                Saznajte više
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Patient testimonials */}
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
            &quot;Redovito obavljam sistematske preglede u Poliklinici Agram i izuzetno sam zadovoljan 
            temeljitošću i profesionalnošću internista. Njihov proaktivni pristup pomogao mi je 
            da na vrijeme otkrijem i počnem liječiti zdravstvene probleme.&quot;
          </p>
          <div className="font-medium">Haris M., Sarajevo</div>
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
            &quot;Ovo je mislim peta ili šesta godina kako u Agram dolazim na sistematske preglede, divni ljudi i sjajni profesionalci. Izuzetna zahvalnost za sve učinjeno do sada, a posebno za dr. Maja Stančić, učinili ste mi život nemjerljivo lakšim i spokojnijim.&quot;
          </p>
          <div className="font-medium">Igor D., Mostar</div>
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
            &quot;Nakon niza nespecifičnih simptoma, internisti u Poliklinici Agram temeljito su istražili 
            moje stanje i postavili točnu dijagnozu. Njihova stručnost i holistički pristup 
            omogućili su mi da se vratim normalnom životu.&quot;
          </p>
          <div className="font-medium">Amir H., Mostar</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Brinite o svom zdravlju</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Preventivni i redoviti internistički pregledi ključni su za održavanje dobrog zdravlja 
          i rano otkrivanje bolesti. Naši internisti su tu da vam pruže vrhunsku zdravstvenu skrb.
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