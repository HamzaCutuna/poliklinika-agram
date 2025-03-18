import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function RadiologijaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src="https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg"
          alt="Radiologija"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Radiologija</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Precizna dijagnostika uz pomoć najsavremenije radiološke opreme i vrhunskih stručnjaka.
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Specijalistička radiološka dijagnostika</h2>
          <p className="text-muted-foreground mb-6">
            Radiologija je grana medicine koja koristi različite tehnike snimanja za dijagnostiku i 
            liječenje bolesti koje se vide unutar tijela. U Poliklinici Agram pružamo širok spektar 
            radioloških usluga koristeći najsavremeniju opremu.
          </p>
          <p className="text-muted-foreground mb-6">
            Naš tim iskusnih radiologa i radioloških tehničara osigurava precizne dijagnoze i 
            minimalnu izloženost zračenju, uz prioritet na sigurnosti i udobnosti pacijenta.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/kontakt">
              <Button className="transition-all hover:shadow-md hover:translate-y-[-2px]">
                Naručite se na pregled
              </Button>
            </Link>
            <Link href="/oprema">
              <Button variant="outline" className="transition-all hover:shadow-md hover:translate-y-[-2px]">
                Pogledajte našu opremu
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg"
            alt="Radiološki pregled"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Naše radiološke usluge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              40 - 70 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Ultrazvučna dijagnostika</h3>
            <p className="text-muted-foreground">
              Detaljna ultrazvučna dijagnostika abdomena, štitnjače, dojki, vrata koji omogućuje procjenu 
              veličine, strukture i funkcije organa.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              350 - 900 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Magnetna rezonanca</h3>
            <p className="text-muted-foreground">
              Magnetska rezonanca je suvremena, radiološka, dijagnostička metoda koja Vam pruža savršenu sliku  cijelog organizma, detaljne slike organa, mišića, zglobova, krvnih žila i ostalih struktura.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              250 - 600 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">CT dijagnostika</h3>
            <p className="text-muted-foreground">
            CT je dijagnostička metoda koja koristi rendgenske zrake kako bi se kreirala detaljna, trodimenzionalna slika unutrašnjih organa i struktura.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              100 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Pasaža crijeva</h3>
            <p className="text-muted-foreground">
              Pasaža crijeva je RTG pregled tankog crijeva kojim se prati prolazak kontrastnog sredstva kroz jednjak, želudac i cijelo tanko crijevo.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              80 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mamografija</h3>
            <p className="text-muted-foreground">
              Radiološka metoda za rano otkrivanje promjena u dojkama, uključujući 
              rak dojke, s detaljnim opisom nalaza od strane specijalista radiologije.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              40 - 65 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">RTG snimanje</h3>
            <p className="text-muted-foreground">
              Klasična radiografija različitih dijelova tijela s 
              profesionalnom interpretacijom nalaza od strane radiologa.
            </p>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Primjena radiološke dijagnostike</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Neurološka dijagnostika</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika bolesti mozga, kralježnice i živčanog sustava, uključujući 
              tumore, upale, degenerativne promjene i vaskularne bolesti.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Dijagnostika mišićno-koštanog sustava</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika ozljeda, degenerativnih promjena, tumora i upalnih 
              procesa kostiju, zglobova i mekih tkiva.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Dijagnostika organa abdomena</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika bolesti jetre, gušterače, bubrega, nadbubrežnih žlijezda 
              i probavnog sustava.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Kardiovaskularna dijagnostika</h3>
            <p className="text-sm text-muted-foreground">
              Dijagnostika bolesti srca i krvnih žila, uključujući koronarnu bolest, 
              aneurizme i tromboze.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Dijagnostika dojke</h3>
            <p className="text-sm text-muted-foreground">
              Rano otkrivanje raka dojke i drugih promjena putem mamografije, 
              ultrazvuka i MRI pregleda.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Onkološka dijagnostika</h3>
            <p className="text-sm text-muted-foreground">
              Detekcija i praćenje tumora u svim dijelovima tijela, procjena 
              proširenosti bolesti i praćenje učinka terapije.
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/4226258/pexels-photo-4226258.jpeg"
            alt="Moderna radiološka oprema"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Zašto odabrati našu radiologiju</h2>
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
                <h3 className="font-medium">Stručni radiološki tim</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Naš tim čine iskusni radiolozi i radiološki tehničari s dugogodišnjim iskustvom u dijagnostici.
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
                <h3 className="font-medium">Najmodernija oprema</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Koristimo najsuvremenije radiološke uređaje koji osiguravaju preciznu dijagnozu uz minimalnu dozu zračenja.
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
                  Digitalni sustav omogućava brzu obradu i dostavu nalaza, uz mogućnost konzultacija s drugim specijalistima.
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
                <h3 className="font-medium">Sigurnost pacijenta</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Posebna pažnja posvećuje se sigurnosti pacijenta i minimalnoj izloženosti zračenju, uz poštivanje svih protokola.
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
            &quot;Profesionalna usluga  i ljubaznost osoblja na visokom nivou. Zaista, sve pohvale svim uposlenicima poliklinike Agram, a posebno dr.Rajni Stanusić.&quot;
          </p>
          <div className="font-medium">Mevla H., Sarajevo</div>
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
            &quot;Prvi put sam radila MRI pregled i bila sam jako nervozna. Medicinski tehničar je bio izuzetno 
            ljubazan i strpljiv, sve mi je objasnio i učinio iskustvo puno lakšim.&quot;
          </p>
          <div className="font-medium">Maja D., Banja Luka</div>
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
            &quot;Godinama dolazim na mamografske preglede u Agram. Njihova digitalna mamografija je brza i puno 
            manje neugodna nego tradicionalna. Zahvalna sam na njihovoj brizi i profesionalnosti.&quot;
          </p>
          <div className="font-medium">Selma T., Mostar</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Najsuvremenija radiološka dijagnostika</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Naši stručnjaci uz pomoć najsuvremenije opreme pružaju precizne dijagnoze za različite medicinske 
          probleme. Naručite se na pregled i uvjerite se u kvalitetu naših usluga.
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