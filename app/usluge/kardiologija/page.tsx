import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function KardiologijaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"
          alt="Kardiologija"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Kardiologija</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Briga o vašem srcu i kardiovaskularnom zdravlju uz pomoć najsuvremenije tehnologije i vrhunskih stručnjaka.
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Specijalistički kardiološki pregledi</h2>
          <p className="text-muted-foreground mb-6">
            Kardiologija je grana medicine koja se bavi prevencijom, dijagnostikom i liječenjem bolesti srca i 
            krvnožilnog sustava. U Poliklinici Agram nudimo sveobuhvatnu kardiološku njegu, od preventivnih 
            pregleda do naprednih dijagnostičkih postupaka, sve u svrhu očuvanja vašeg kardiovaskularnog zdravlja.
          </p>
          <p className="text-muted-foreground mb-6">
            Naš tim iskusnih kardiologa koristi najsuvremeniju opremu i primjenjuje najnovije medicinske spoznaje 
            kako bi vam pružio najbolju moguću skrb.
          </p>

        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/kardiologija.jpg"
            alt="Kardiološki pregled"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Naše kardiološke usluge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              75 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Kardiološki pregled</h3>
            <p className="text-muted-foreground">
              Kompletan kardiološki pregled uključuje detaljnu anamnezu, fizikalni pregled, EKG, 
              procjenu faktora rizika i individualni plan liječenja.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              15 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">EKG s interpretacijom</h3>
            <p className="text-muted-foreground">
              Elektrokardiografija (EKG) je bezbolna dijagnostička metoda koja bilježi električnu aktivnost 
              srca i pomaže u otkrivanju srčanih poremećaja i abnormalnosti.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              130 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ultrazvuk srca</h3>
            <p className="text-muted-foreground">
              Ehokardiografija je neinvazivna dijagnostička metoda koja koristi ultrazvučne valove za stvaranje 
              detaljnih slika strukture i funkcije srca.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              100 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Holter EKG (24h)</h3>
            <p className="text-muted-foreground">
              Holter monitoring je kontinuirano 24-satno praćenje srčane aktivnosti koje pomaže u otkrivanju 
              poremećaja ritma i drugih srčanih abnormalnosti tijekom svakodnevnih aktivnosti.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              90 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Holter krvnog pritiska</h3>
            <p className="text-muted-foreground">
              24-satno automatsko mjerenje krvnog pritiska koje pruža detaljniji uvid u dnevne varijacije 
              krvnog pritiska i pomaže u dijagnostici hipertenzije.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              100 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ergometrija</h3>
            <p className="text-muted-foreground">
              Test opterećenja koji procjenjuje funkciju srca tijekom fizičke aktivnosti, pomaže u 
              otkrivanju koronarne bolesti srca i određivanju aerobnog kapaciteta.
            </p>
          </div>
        </div>
      </div>

      {/* Common conditions */}
      <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Stanja koja liječimo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Koronarna bolest srca</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje angine pektoris, infarkta miokarda i drugih manifestacija koronarne bolesti.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Arterijska hipertenzija</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje povišenog krvnog tlaka, uključujući i rezistentnu hipertenziju.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Srčane aritmije</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje poremećaja srčanog ritma, uključujući fibrilaciju atrija, tahikardije i bradikardije.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Bolesti srčanih zalistaka</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i praćenje mitralne, aortne, trikuspidalne i pulmonalne stenoze i/ili insuficijencije.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Zatajenje srca</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje sistoličkog i dijastoličkog zatajenja srca te praćenje bolesnika.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Kardiomiopatije</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika i liječenje dilatacijske, hipertrofične, restriktivne i drugih oblika kardiomiopatija.
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
            alt="Moderna kardiološka oprema"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Zašto odabrati našu kardiologiju</h2>
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
                  Naši kardiolozi imaju višegodišnje iskustvo i kontinuirano se usavršavaju u području kardiologije.
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
                <h3 className="font-medium">Najsuvremenija oprema</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Koristimo najnoviju dijagnostičku opremu koja omogućava preciznu i pouzdanu procjenu srčane funkcije.
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
                <h3 className="font-medium">Sveobuhvatna skrb</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Od preventivnih pregleda do kompleksne dijagnostike i liječenja, pružamo kompletnu kardiološku skrb.
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
            "Već nekoliko godina dolazim na kontrole kod kardiologa u Poliklinici Agram. Izuzetno sam zadovoljna 
            stručnošću liječnika i pristupom prema pacijentima. Pregledi su temeljiti, a dobijam jasna objašnjenja 
            o svom stanju i potrebnim mjerama."
          </p>
          <div className="font-medium">Amra H.</div>
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
            "Nakon što sam imao određene tegobe, odlučio sam se za kompletan kardiološki pregled. Doktor 
            je detaljno objasnio sve nalaze i predložio daljnje korake. Cijelim procesom sam vrlo zadovoljan, 
            a posebno pristupačnošću osoblja."
          </p>
          <div className="font-medium">Emir K.</div>
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
            "Zahvaljujući redovitim kardiološkim pregledima u Poliklinici Agram i savjetima koje sam dobio, 
            uspio sam značajno poboljšati svoje zdravlje. Moderan prostor, ljubazno osoblje i kvalitetna usluga 
            čine me zadovoljnim pacijentom."
          </p>
          <div className="font-medium">Mirza S.</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Brinite o zdravlju svog srca</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Redoviti kardiološki pregledi ključni su za rano otkrivanje i prevenciju srčanih bolesti. 
          Naši stručnjaci su tu da vam pomognu održati zdravlje srca i krvožilnog sustava.
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