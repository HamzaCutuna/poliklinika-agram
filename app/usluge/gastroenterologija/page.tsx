import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function GastroenterologijaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src="/images/gastroenterologija2.jpg"
          alt="Gastroenterologija"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Gastroenterologija</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Dijagnostika i liječenje bolesti probavnog sustava uz pomoć vrhunskih stručnjaka i moderne tehnologije.
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Specijalistički gastroenterološki pregledi</h2>
          <p className="text-muted-foreground mb-6">
            Gastroenterologija je grana medicine koja se bavi prevencijom, dijagnostikom i liječenjem bolesti 
            probavnog sustava, uključujući jednjak, želudac, crijeva, jetru, žučni mjehur i gušteraču. 
            U Poliklinici Agram nudimo sveobuhvatnu gastroenterološku njegu, od preventivnih 
            pregleda do naprednih dijagnostičkih postupaka.
          </p>
          <p className="text-muted-foreground mb-6">
            Naš tim iskusnih gastroenterologa koristi najsuvremeniju opremu i primjenjuje najnovije medicinske spoznaje 
            kako bi vam pružio najbolju moguću skrb za vaše probavno zdravlje.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/gastroenterologija.jpg"
            alt="Gastroenterološki pregled"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Naše gastroenterološke usluge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              65 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/stomach.svg"
                alt="Gastroenterološki pregled"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Gastroenterološki pregled</h3>
            <p className="text-muted-foreground">
              Cjeloviti pregled probavnog sustava koji uključuje detaljnu anamnezu, 
              fizikalni pregled i savjetovanje o daljnjim postupcima.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              110 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/endoscopy.svg"
                alt="Ezofagogastroduodenoskopija ikona"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Gastroskopija</h3>
            <p className="text-muted-foreground">
              Endoskopski pregled jednjaka, želuca i dvanaesnika koji omogućuje 
              otkrivanje upala, čireva, tumora i drugih promjena.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              180 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/colonoscopy.svg"
                alt="Kolonoskopija ikona"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Kolonoskopija</h3>
            <p className="text-muted-foreground">
              Endoskopski pregled debelog crijeva koji je ključan za rano 
              otkrivanje polipa, tumora i drugih promjena.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              45 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/liver.svg"
                alt="Dijagnostika bolesti jetre ikona"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Kontrolni specijalistički pregled</h3>
            <p className="text-muted-foreground">
              Detaljni pregled trbušnih organa (jetre, žučnog mjehura, gušterače, 
              slezene i bubrega) za otkrivanje različitih stanja.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              65 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/intestine.svg"
                alt="Liječenje upalnih bolesti crijeva ikona"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Liječenje upalnih bolesti crijeva</h3>
            <p className="text-muted-foreground">
              Dijagnostika i liječenje Crohnove bolesti, ulceroznog kolitisa 
              i drugih kroničnih upalnih stanja probavnog sustava.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              30 - 45 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/nutrition.svg"
                alt="Nutritivno savjetovanje ikona"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Konzultacije</h3>
            <p className="text-muted-foreground">
              Individualni savjeti o prehrani za osobe s probavnim tegobama, 
              intolerancijama na hranu i drugim gastroenterološkim stanjima.
            </p>
          </div>
        </div>
      </div>

      {/* Common conditions */}
      <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Stanja koja liječimo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Upalne bolesti crijeva</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje Crohnove bolesti i ulceroznog kolitisa kroz multidisciplinarni pristup.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">GERB</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje gastroezofagealne refluksne bolesti i povezanih komplikacija.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Sindrom iritabilnog crijeva</h3>
            <p className="text-sm text-muted-foreground">
              Individualni pristup liječenju sindroma iritabilnog crijeva kroz dijetetske mjere i medikamentoznu terapiju.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Bolesti jetre</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje masne jetre, hepatitisa, ciroze i drugih jetrenih bolesti.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Bolesti žučnih puteva</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje žučnih kamenaca, upale žučnog mjehura i drugih bolesti bilijarnog trakta.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Bolesti gušterače</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje akutnog i kroničnog pankreatitisa te drugih bolesti gušterače.
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/gastroenterologija1.jpg"
            alt="Moderna gastroenterološka oprema"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Zašto odabrati našu gastroenterologiju</h2>
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
                <h3 className="font-medium">Stručni tim</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Naši gastroenterolozi imaju višegodišnje iskustvo i kontinuirano se usavršavaju u području gastroenterologije.
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
                <h3 className="font-medium">Najsuvremenija endoskopska oprema</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Koristimo najnoviju endoskopsku i ultrazvučnu opremu koja omogućava preciznu dijagnostiku probavnih bolesti.
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
                  Uska suradnja s drugim specijalnostima poput kirurgije, radiologije i onkologije za sveobuhvatnu skrb.
                </p>
              </div>
            </div>
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
            &quot;Nakon godina problema s probavom, konačno sam dobio pravilnu dijagnozu sindroma iritabilnog crijeva 
            u Poliklinici Agram. Liječenje koje sam dobio značajno je poboljšalo kvalitetu mog života. 
            Posebno cijenim temeljitost i strpljenje doktora.&quot;
          </p>
          <div className="font-medium">Tarik H., Sarajevo</div>
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
            &quot;Kolonoskopija koju sam obavio u Poliklinici Agram bila je daleko manje neugodna nego što sam očekivao. 
            Osoblje je bilo izuzetno profesionalno i pažljivo, a doktor mi je detaljno objasnio 
            sve nalaze i preporučene preventivne mjere.&quot;
          </p>
          <div className="font-medium">Damir K., Zenica</div>
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
            &quot;Godinama sam se mučila s refluksom, a tek nakon pregleda u gastroenterološkoj ambulanti 
            Poliklinike Agram dobila sam pravilnu dijagnozu i terapiju. Sada konačno mogu normalno 
            jesti i spavati bez neugodnih simptoma.&quot;
          </p>
          <div className="font-medium">Lejla M., Mostar</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Brinite o zdravlju svog probavnog sustava</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Redoviti gastroenterološki pregledi ključni su za rano otkrivanje i prevenciju bolesti probavnog sustava. 
          Naši stručnjaci su tu da vam pomognu održati zdravlje vašeg probavnog trakta.
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