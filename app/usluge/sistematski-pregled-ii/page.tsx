import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function SistematskiPregledIIPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src="/images/agram4.jpg"
          alt="Sistematski pregled za rukovoditelje"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Sistematski pregled II</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Ekskluzivni sistematski pregled za rukovoditelje i menadžere s proširenim dijagnostičkim postupcima.
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Zdravlje menadžera - temelj poslovnog uspjeha</h2>
          <p className="text-muted-foreground mb-6">
            Rukovoditelji i menadžeri često zbog visokog obima posla i stresa zanemaruju svoje zdravlje. Naš ekskluzivni sistematski pregled za rukovoditelje posebno je dizajniran kako bi osigurao sveobuhvatnu procjenu zdravstvenog stanja osoba izloženih visokim poslovnim opterećenjima.
          </p>
          <p className="text-muted-foreground mb-6">
            Uz standardne pretrage, VIP sistematski pregled uključuje dodatnu dijagnostiku usmjerenu na prevenciju bolesti povezanih sa stresom i sjedilačkim načinom života. Pregled se obavlja u diskretnom okruženju s fleksibilnim terminima kako bi se prilagodio vašem poslovnom rasporedu.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
            alt="Sistematski pregled za menadžere"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>

      {/* Executive packages */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Naši VIP sistematski pregledi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              550 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/executive.svg"
                alt="Executive"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Executive Basic</h3>
            <p className="text-muted-foreground mb-4">
              Detaljan klinički pregled specijalista, proširena laboratorijska obrada, EKG, UZV štitnjače i abdomena, 
              ergometrija, spirometrija, pregled urologa/ginekologa.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-4">
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Internistički pregled
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Kompletna laboratorijska dijagnostika
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                UZV abdomena i štitnjače
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Specijalistički pregled (urolog/ginekolog)
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative border-2 border-primary/20">
            <div className="absolute top-5 right-5 bg-primary text-white font-medium text-sm py-1 px-3 rounded-full">
              750 KM
            </div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-medium py-1 px-3 rounded-full">
              Najpopularniji
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/executive.svg"
                alt="Executive Plus"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Executive Plus</h3>
            <p className="text-muted-foreground mb-4">
              Executive Basic paket plus ultrazvuk srca, kolor dopler karotida, RTG pluća, oftalmološki pregled, 
              ultrazvuk prostate/dojki, dermatološki pregled.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-4">
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Sve usluge iz Basic paketa
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Ehokardiografija i kolor dopler karotida
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Proširena dijagnostika (RTG pluća)
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Dermatološki i oftalmološki pregled
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              950 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/executive.svg"
                alt="Executive Premium"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Executive Premium</h3>
            <p className="text-muted-foreground mb-4">
              Executive Plus paket plus dodatni specijalisti, MR jedne regije po izboru, CT jedne regije po izboru, 
              holter EKG, holter tlaka, kolonoskopija i gastroskopija.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 mb-4">
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Sve usluge iz Plus paketa
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                MR i CT jedne regije po izboru
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Holter EKG (24h) i holter tlaka
              </li>
              <li className="flex items-start">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Kolonoskopija i gastroskopija
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Additional benefits */}
      <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Dodatne pogodnosti za rukovoditelje</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">Fleksibilno vrijeme pregleda</h3>
              <p className="text-muted-foreground">
                Prilagođavamo termine pregleda prema vašem poslovnom rasporedu, uključujući mogućnost
                ranojutarnjih ili večernjih termina.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">Diskrecija i privatnost</h3>
              <p className="text-muted-foreground">
                Osiguravamo maksimalnu diskreciju i privatnost tijekom cijelog pregleda i u komunikaciji
                s našim medicinskim osobljem.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">Brza realizacija</h3>
              <p className="text-muted-foreground">
                Sve pretrage i specijalističke preglede obavljamo u najkraćem mogućem roku,
                a rezultate dobivate isti dan ili najkasnije sljedeći radni dan.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold mb-2">Detaljni završni izvještaj</h3>
              <p className="text-muted-foreground">
                Na kraju pregleda dobivate cjeloviti izvještaj s tumačenjem rezultata i personaliziranim
                preporukama za unapređenje zdravlja.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate offers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/sistematski3.jpg"
            alt="Korporativni sistematski pregledi"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Korporativna ponuda</h2>
          <p className="text-muted-foreground mb-6">
            Za tvrtke nudimo posebne pakete sistematskih pregleda prilagođene potrebama rukovodećeg kadra i zaposlenika. 
            Pregledi se mogu obavljati u grupama ili individualno, a moguća je i organizacija pregleda u vašim poslovnim prostorima.
          </p>
          <p className="text-muted-foreground mb-6">
            Korporativni sistematski pregledi omogućuju ranu detekciju zdravstvenih rizika, smanjenje bolovanja, 
            povećanje produktivnosti i stvaranje pozitivnog radnog okruženja koje vrednuje zdravlje zaposlenika.
          </p>
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
                <h3 className="font-medium">Prilagođeni paketi prema strukturi zaposlenika</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Kreiramo različite pakete pregleda ovisno o potrebama rukovoditelja, srednjeg menadžmenta i ostalih zaposlenika.
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
                <h3 className="font-medium">Povoljniji uvjeti za veće grupe</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Nudimo posebne popuste za tvrtke ovisno o broju zaposlenika koji će obaviti sistematski pregled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Patient testimonials */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Iskustva naših klijenata</h2>
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
            &quot;Kao CEO kompanije s preko 100 zaposlenika, iznimno cijenim temeljitost i diskreciju prilikom Executive Premium pregleda. Sve je obavljeno u jednom danu, a rezultati su bili dostupni odmah. Svakako preporučujem kolegama direktorima.&quot;
          </p>
          <div className="font-medium">Adnan J., Generalni direktor</div>
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
            &quot;Za našu menadžersku strukturu organizirali smo grupne Executive Plus preglede. Tim Poliklinike Agram pokazao je izvanrednu profesionalnost i fleksibilnost prilagođavajući termine našim poslovnim obvezama. Rezultati su bili vrlo korisni u prevenciji zdravstvenih problema.&quot;
          </p>
          <div className="font-medium">Mirela K., HR direktorica</div>
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
            &quot;Redovito obavljam Executive sistematski pregled i svaki put sam iznova impresioniran profesionalnošću i temeljitošću. Posebno cijenim personalizirani pristup i detaljno tumačenje svih nalaza koje dobijem na kraju pregleda. Ovo je prava investicija u zdravlje.&quot;
          </p>
          <div className="font-medium">Damir H., Financijski direktor</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Osigurajte zdravlje svoje menadžerske strukture</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Zdravi rukovoditelji temelj su uspješnog poslovanja. Ulaganje u zdravlje vaših menadžera donosi 
          dugoročne koristi za cijelu organizaciju. Naručite se na Executive sistematski pregled već danas.
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
          <Link href="/kontakt">
            <Button variant="outline" className="px-8 transition-all hover:shadow-md hover:translate-y-[-2px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Zatražite korporativnu ponudu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 