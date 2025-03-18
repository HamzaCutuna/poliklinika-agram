import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function OftalmologijaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src="https://images.pexels.com/photos/5752287/pexels-photo-5752287.jpeg"
          alt="Oftalmologija"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Oftalmologija</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Vrhunska dijagnostika i liječenje bolesti oka uz pomoć modernih tehnologija i stručnjaka s dugogodišnjim iskustvom.
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Specijalistički oftalmološki pregledi</h2>
          <p className="text-muted-foreground mb-6">
            Oftalmologija je grana medicine koja se bavi dijagnosticiranjem i liječenjem bolesti oka i poremećaja vida. 
            U našoj poliklinici nudimo sveobuhvatne oftalmološke preglede koji uključuju provjeru vidne oštrine, 
            mjerenje očnog tlaka, pregled očne pozadine i druge specijalizirane testove.
          </p>
          <p className="text-muted-foreground mb-6">
            Naš tim stručnjaka koristi najsuvremeniju opremu za dijagnostiku i liječenje raznih očnih stanja, 
            uključujući kratkovidnost, dalekovidnost, astigmatizam, glaukom, kataraktu, dijabetičku retinopatiju i druge bolesti oka.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/5752258/pexels-photo-5752258.jpeg"
            alt="Oftalmološki pregled"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Naše oftalmološke usluge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              65 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/eye.svg"
                alt="Cjeloviti oftalmološki pregled ikona"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Oftalmološki pregled</h3>
            <p className="text-muted-foreground">
              Detaljna procjena zdravlja oka koja uključuje pregled vidne oštrine, 
              očnog tlaka, prednjeg i stražnjeg segmenta oka.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              20 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/glasses.svg"
                alt="Pregled dioptrije"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Korekcija vida</h3>
            <p className="text-muted-foreground">
              Određivanje dioptrije i propisivanje odgovarajućih naočala ili 
              kontaktnih leća za poboljšanje vida.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              70 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/pressure.svg"
                alt="Mjerenje očnog tlaka"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Glaukom dijagnostika</h3>
            <p className="text-muted-foreground">
              Specijalizirani pregled za rano otkrivanje glaukoma, koji 
              uključuje mjerenje očnog tlaka i pregled vidnog živca.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              45 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/cataract.svg"
                alt="Operacija katarakte"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fundus</h3>
            <p className="text-muted-foreground">
              Pregled fundusa je pregled očne pozadine oftalmoskopom bez ili sa širenjem zjenica.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              65 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/retina.svg"
                alt="Pregled mrežnice"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dijagnostika bolesti mrežnice</h3>
            <p className="text-muted-foreground">
              Pregled i dijagnostika stanja poput makularae degeneracije, 
              dijabetičke retinopatije i drugih bolesti mrežnice.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:translate-y-[-5px] relative">
            <div className="absolute top-5 right-5 bg-primary/10 text-primary font-medium text-sm py-1 px-2 rounded-full">
              45 KM
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <Image
                src="/icons/drop.svg"
                alt="Liječenje glaukoma"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Liječenje sindroma suhog oka</h3>
            <p className="text-muted-foreground">
              Dijagnostika i liječenje neugodnog osjećaja suhoće, 
              peckanja i crvenila očiju uzrokovanih nedostatkom suza.
            </p>
          </div>
        </div>
      </div>

      {/* Common conditions */}
      <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Stanja koja liječimo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Poremećaji refrakcije</h3>
            <p className="text-sm text-muted-foreground">
              Kratkovidnost, dalekovidnost, astigmatizam i prezbiopija (staračka dalekovidnost).
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Katarakta</h3>
            <p className="text-sm text-muted-foreground">
              Zamućenje očne leće koje uzrokuje postepeno slabljenje vida.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Glaukom</h3>
            <p className="text-sm text-muted-foreground">
              Povišeni očni tlak koji može dovesti do oštećenja očnog živca i gubitka vida.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Makularna degeneracija</h3>
            <p className="text-sm text-muted-foreground">
              Progresivna bolest koja utječe na središnji dio mrežnice (makulu) i može uzrokovati gubitak centralnog vida.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Dijabetička retinopatija</h3>
            <p className="text-sm text-muted-foreground">
              Komplikacija dijabetesa koja zahvaća krvne žile u mrežnici oka.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Sindrom suhog oka</h3>
            <p className="text-sm text-muted-foreground">
              Stanje uzrokovano nedovoljnom produkcijom suza ili njihovim prebrzim isparavanjem.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Konjunktivitis</h3>
            <p className="text-sm text-muted-foreground">
              Upala očne spojnice koja može biti uzrokovana infekcijom, alergijom ili iritacijom.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Odljepljenje mrežnice</h3>
            <p className="text-sm text-muted-foreground">
              Hitno stanje u kojem se mrežnica odvaja od pozadine oka.
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/oftalmologija.jpg"
            alt="Moderna oftalmološka oprema"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-700"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Zašto odabrati našu oftalmologiju</h2>
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
                  Naš tim oftalmologa ima dugogodišnje iskustvo u dijagnostici i liječenju širokog spektra očnih bolesti.
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
                <h3 className="font-medium">Moderna oprema</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Koristimo najnoviju tehnologiju za preciznu dijagnostiku i učinkovito liječenje bolesti oka.
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
                  Posvećujemo posebnu pažnju svakom pacijentu i razvijamo personalizirane planove liječenja.
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
                <h3 className="font-medium">Preventiva</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Naglašavamo važnost redovitih oftalmoloških pregleda za rano otkrivanje i prevenciju očnih bolesti.
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
            "Sve pohvale za polikliniku, a posebno za najbolju doktoricu oftalmologa Tatjanu Ružić Arežinu. Ljubazna,stručna, strpljiva, detaljna i nadasve izuzetan ljekar i dijagnostičar. Ništa ne prepušta slučaju,jako precizna."
          </p>
          <div className="font-medium">Mirna B., Sarajevo</div>
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
            "Danas sam bio na sistematskom pregledu, od samog prijema do završetka samo riječi pohvale kako za pomoćno osoblje tako i za vrhunske znalce svoga posla. Posebno sam zadivljen kojom predanošću je oftalmolog pristupio mom pregledu."
          </p>
          <div className="font-medium">Rusmir K., Sarajevo</div>
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
            "Ovom prilikom željela bih se zahvaliti ljubaznom i profesionalnom osoblju i doktorima koji savjesno obavljaju svoj posao, a posebice dr. Tatjani, oftamologinji koja je odvojila puno vremena na pregled, razgovor i kvalitetne savjete."
          </p>
          <div className="font-medium">Lidija M., Sarajevo</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Brinite o zdravlju svojih očiju</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Redoviti oftalmološki pregledi ključni su za održavanje dobrog vida i zdravlja očiju. 
          Ne čekajte da se pojave problemi - naručite se na pregled već danas.
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