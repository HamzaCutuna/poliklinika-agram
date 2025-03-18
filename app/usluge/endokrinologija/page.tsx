import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function EndokrinologijaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src="/images/endokrinologija.jpg"
          alt="Endokrinologija"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Endokrinologija</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Dijagnostika i liječenje bolesti endokrinih žlijezda i hormonskih poremećaja uz vrhunske stručnjake.
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Specijalistički endokrinološki pregledi</h2>
          <p className="text-muted-foreground mb-6">
            Endokrinologija je grana medicine koja se bavi dijagnostikom i liječenjem bolesti endokrinih žlijezda 
            koje proizvode hormone. U Poliklinici Agram nudimo sveobuhvatnu endokrinološku njegu, od preventivnih 
            pregleda do naprednih dijagnostičkih postupaka i praćenja hormonskih poremećaja.
          </p>
          <p className="text-muted-foreground mb-6">
            Naš tim iskusnih endokrinologa koristi najsuvremeniju opremu i primjenjuje najnovije medicinske spoznaje 
            kako bi vam pružio najbolju moguću skrb za vaše hormonsko zdravlje.
          </p>
          
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/endokrinologija1.jpg"
            alt="Endokrinološki pregled"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Naše endokrinološke usluge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              65 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/endocrine.svg"
                alt="Endokrinološki pregled"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Endokrinološki pregled</h3>
            <p className="text-muted-foreground">
              Cjeloviti pregled koji uključuje detaljnu anamnezu, fizikalni pregled 
              i procjenu hormona i endokrinih žlijezda.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              45 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/thyroid.svg"
                alt="Dijagnostika bolesti štitnjače ikona"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Kontrolni specijalistički pregled</h3>
            <p className="text-muted-foreground">
              Pregled štitnjače, laboratorijska analiza hormona i ultrazvuk 
              za dijagnostiku hipotireoze, hipertireoze i čvorova štitnjače.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              65 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/diabetes.svg"
                alt="Liječenje dijabetesa ikona"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Liječenje dijabetesa</h3>
            <p className="text-muted-foreground">
              Dijagnostika i terapija dijabetesa tipa 1 i 2, savjetovanje o prehrani, 
              tjelesnoj aktivnosti i prilagodba terapije.
            </p>
          </div>
          
        </div>
      </div>

      {/* Common conditions */}
      <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Stanja koja liječimo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Bolesti štitnjače</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje hipotireoze, hipertireoze, Hashimotovog tiroiditisa, čvorova i drugih bolesti štitnjače.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Šećerna bolest (Dijabetes)</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika, liječenje i praćenje dijabetesa tipa 1 i tipa 2, prilagodba terapije i edukacija pacijenata.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Poremećaji nadbubrežne žlijezde</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje Cushingovog sindroma, Addisonove bolesti i drugih poremećaja nadbubrežne žlijezde.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Poremećaji hipofize</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje tumora hipofize, hipopituitarizma, akromegalije i drugih bolesti hipofize.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Osteoporoza</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika, prevencija i liječenje osteoporoze te smanjenje rizika od prijeloma.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Poremećaji metabolizma</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje metaboličkog sindroma, hiperlipidemije, gihta i drugih metaboličkih poremećaja.
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/endokrinologija2.jpg"
            alt="Moderna endokrinološka oprema"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Zašto odabrati našu endokrinologiju</h2>
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
                  Naši endokrinolozi imaju višegodišnje iskustvo i kontinuirano se usavršavaju u području endokrinologije.
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
                <h3 className="font-medium">Napredna dijagnostika</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Koristimo najnoviju dijagnostičku opremu i laboratorijske metode za preciznu dijagnostiku hormonskih poremećaja.
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
                <h3 className="font-medium">Edukacija pacijenata</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Posebnu pažnju posvećujemo edukaciji pacijenata o njihovom stanju, terapiji i važnosti redovitih kontrola.
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
            "Godinama sam se borila s problemima štitnjače, a tek u Poliklinici Agram sam dobila 
            točnu dijagnozu i odgovarajuću terapiju. Redovito pratim svoje stanje i iznimno sam zadovoljna 
            stručnošću i pristupom endokrinologa."
          </p>
          <div className="font-medium">Ajla M.</div>
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
            "Kao dijabetičar tip 2, redovito dolazim na kontrole u Polikliniku Agram. Doktori su vrlo temeljiti, 
            a njihovi savjeti za promjenu životnog stila pomogli su mi da značajno poboljšam kontrolu šećera 
            i smanjim potrebnu dozu lijekova."
          </p>
          <div className="font-medium">Samir H.</div>
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
            "Otkako sam počela pratiti svoje hormonsko zdravlje u Poliklinici Agram, osjećam se bolje nego ikad. 
            Posebno cijenim detaljne upute i objašnjenja koja dobivam od svog endokrinologa, što mi 
            pomaže da bolje razumijem svoje stanje."
          </p>
          <div className="font-medium">Melisa K.</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Brinite o svom hormonskom zdravlju</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Hormonski poremećaji mogu utjecati na mnoge aspekte vašeg zdravlja i kvalitete života. 
          Naši stručnjaci su tu da vam pomognu u dijagnostici i liječenju endokrinoloških stanja.
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