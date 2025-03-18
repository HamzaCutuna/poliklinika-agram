import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function SistematskiPregledPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src="/images/sistematski1.jpg"
          alt="Sistematski pregled"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Sistematski pregled</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Sveobuhvatni preventivni pregled za muškarce i žene s ciljem ranog otkrivanja zdravstvenih problema.
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Zašto je sistematski pregled važan?</h2>
          <p className="text-muted-foreground mb-6">
            Sistematski pregled predstavlja sveobuhvatnu procjenu vašeg zdravstvenog stanja koja omogućava rano otkrivanje potencijalnih zdravstvenih problema. U Poliklinici Agram nudimo temeljite sistematske preglede prilagođene muškarcima i ženama različitih dobnih skupina.
          </p>
          <p className="text-muted-foreground mb-6">
            Redoviti sistematski pregledi ključni su za prevenciju bolesti i očuvanje vašeg zdravlja. Naš stručni tim specijalista koristi najsuvremenije dijagnostičke metode kako bi vam pružio kompletnu sliku vašeg zdravstvenog stanja.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/sistematski2.jpg"
            alt="Preventivni zdravstveni pregled"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>

      {/* Services*/}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Naši sistematski pregledi</h2>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
              <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
                250 KM
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Image
                  src="/icons/male.svg"
                  alt="Muski sistematski"
                  width={24}
                  height={24}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Osnovni sistematski - muškarci</h3>
              <p className="text-muted-foreground">
                Pregled interniste, EKG, RTG srca i pluća (na indikaciju), UZV abdomena, UZV prostate, PSA – tumorski biljeg prostate, laboratorijska obrada (kompletna krvna slika, CRP, glukoza, kreatinin, urati, bilirubin, kolesterol, HDL,LDL, trigliceridi, AST, ALT, ALP, GGT, K, Na i analiza urina)
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
              <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
                300 KM
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                  src="/icons/female.svg"
                  alt="Zenski sistematski"
                  width={24}
                  height={24}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Osnovni sistematski - žene</h3>
              <p className="text-muted-foreground">
                Pregled interniste, EKG, RTG srca i pluća (na indikaciju), pregled dojki (UZV ili mamografija, ovisno o dobi), kompletna ginekološka obrada (pregled, PAPA, UZV), UZV abdomena, laboratorijska obrada (kompletna krvna slika, CRP, glukoza, kreatinin, urati, bilirubin, kolesterol, HDL, LDL, trigliceridi, AST, ALT, ALP, GGT, K, Na i analiza urina)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What includes */}
      <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Što uključuje sistematski pregled?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Klinički pregled</h3>
            <p className="text-sm text-muted-foreground">
              Detaljan pregled koji uključuje anamnezu, mjerenje tlaka, visine, težine, indeksa tjelesne mase i opsega struka.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Laboratorijske pretrage</h3>
            <p className="text-sm text-muted-foreground">
              Kompletna krvna slika, glukoza, lipidogram, jetreni enzimi, urea, kreatinin, mokraćna kiselina, testovi koagulacije.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Elektrokardiogram (EKG)</h3>
            <p className="text-sm text-muted-foreground">
              Grafički prikaz električne aktivnosti srca koji pomaže u otkrivanju srčanih bolesti i poremećaja.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Ultrazvučna dijagnostika</h3>
            <p className="text-sm text-muted-foreground">
              Ultrazvuk abdomena koji omogućuje pregled jetre, žučnog mjehura, bubrega, slezene, gušterače i drugih organa.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Specijalistički pregledi</h3>
            <p className="text-sm text-muted-foreground">
              Pregledi interniste, urologa (za muškarce), ginekologa (za žene) i drugih specijalista prema potrebi.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Preporuke i savjetovanje</h3>
            <p className="text-sm text-muted-foreground">
              Detaljno tumačenje nalaza i stručni savjeti za unapređenje životnih navika i očuvanje zdravlja.
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
            alt="Moderna medicinska oprema"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Zašto odabrati naše sistematske preglede</h2>
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
                <h3 className="font-medium">Stručni tim specijalista</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Naš tim čine vrhunski liječnici s dugogodišnjim iskustvom u svojim područjima specijalizacije.
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
                <h3 className="font-medium">Najsuvremenija dijagnostika</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Koristimo najnoviju dijagnostičku opremu koja osigurava precizne i pouzdane rezultate.
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
                <h3 className="font-medium">Brzi i učinkoviti pregledi</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Sve pretrage obavljaju se u kratkom vremenskom roku, a rezultate dobivate istog ili sljedećeg dana.
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
                <h3 className="font-medium">Personalizirani pristup</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Pregledi se prilagođavaju vašim individualnim potrebama, dobi, obiteljskoj anamnezi i faktorima rizika.
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
            &quot;Zaista od srca sve pohvale za izuzetnu ljubaznost, profesionalnost i stručnost svakog zaposlenika od samog ulaza i recepcije do završetka sistematskog pregleda. Ne bi nikog mogla izdvojiti jednostavno su svi divni, nasmijani i susretljivi.&quot;
          </p>
          <div className="font-medium">Zehra S.</div>
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
            &quot;Danas sam bio na sistematskom pregledu, od samog prijema do zavrsetka samo rijeci pohvale kako za pomocno osoblje tako i ta vrhunske znalce svoga posla - specijaliste medicinskih disciplina koji su me pregledali danas.&quot;
          </p>
          <div className="font-medium">Rusmir K.</div>
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
            &quot;Bio sam na sistematskom pregledu i moram reći da sam izuzetno zadovoljan cijelim iskustvom. Osoblje je bilo vrlo ljubazno i ​​profesionalno, od trenutka kada sam ušao u ordinaciju do završetka pregleda.&quot;
          </p>
          <div className="font-medium">Denis U.</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Uložite u svoje zdravlje</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Redoviti sistematski pregledi ključni su za očuvanje vašeg zdravlja i rano otkrivanje potencijalnih zdravstvenih problema. 
          Naručite se na sistematski pregled u Poliklinici Agram i uložite u svoju budućnost.
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