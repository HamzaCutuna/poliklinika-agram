import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export default function OpremaPage() {
  const equipmentCategories = [
    {
      title: "Dijagnostička oprema",
      items: [
        {
          name: "MSCT SOMATOM DEFINITION 64",
          description: "MSCT odnosno višeslojni CT je uređaj koji predstavlja tehnološki vrhunac u razvoju uređaja za kompjutersku tomografiju, kako zbog kvalitete obrade tako i zbog zaštite pacijenta od suvišnog zračenja.",
          image: "/images/radiologija.jpg"
        },
        {
          name: "MR AVANTO SIEMENS 1.5 T",
          description: "Uređaj omogućuje dijagnostiku bolesti neurološkog sustava, preglede u području glave i vrata, mišičinog i koštanog sustava te u području trbušne šupljine i medijastinuma, kao i izvođenje MR-angiografije aorte...",
          image: "/images/mruredjaj.jpg"
        },
        {
          name: "RTG AXIOM ICONOS R100",
          description: "Digitalni teledirigirani uređaj za fluoroskopiju i radiografiju koristi se za sve pretrage gastrointestinalnog trakta, slike kostiju, uključujući i artografije s mogućnošću dobivanja žive flouroskopske slike vrhunske kvalitete.",
          image: "/images/rtg.jpg"
        },
        {
          name: "SIEMENS MAMOMAT 3000 NOVA",
          description: "Koristi za svakodnevni screening i dijagnostiku bolesti dojki. Uređaj je građen na način da se jačina kompresije dojke automatski prilagođava anatomiji dojke što doprinosi većoj komfornosti pacijentica prilikom snimanja.",
          image: "/images/siemens.jpg"
        }
      ]
    },
    {
      title: "Ultrazvučna dijagnostika",
      items: [
        {
          name: "UZV VOLUSON E10",
          description: "Uređaj izvanredne kvalitete slike,  omogućuje čisti prikaz organa prilikom trudničkih i ginekoloških ultrazvučnih pregleda.",
          image: "/images/uzv.jpg"
        }
      ]
    },
    {
      title: "Laserska i terapeutska oprema:",
      items: [
        {
          name: "FOTONA SP DYNAMIS",
          description: "Napredni medicinski laser koji se koristi u dermatologiji, estetskoj medicini i hirurgiji za precizne i neinvazivne tretmane, uključujući podmlađivanje kože, uklanjanje ožiljaka i tretmane za smanjenje bora.",
          image: "/images/fotona.jpg"
        }
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
        <Image
          src="https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg"
          alt="Medicinska oprema"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Naša medicinska oprema</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Poliklinika Agram opremljena je najsuvremenijom medicinskom opremom za dijagnostiku i liječenje.
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Vrhunska tehnologija za vašu zdravstvenu skrb</h2>
        <p className="text-muted-foreground mb-6">
          U Poliklinici Agram ponosni smo na našu naprednu medicinsku opremu koja nam omogućava pružanje 
          visokokvalitetnih dijagnostičkih i terapijskih usluga. Kontinuirano ulažemo u najnovije tehnologije 
          kojom rukuju vrhunski stručnjaci s dugogodišnjim iskustvom.
        </p>
      </div>

      {/* Equipment categories */}
      {equipmentCategories.map((category, index) => (
        <div key={index} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{category.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 relative h-[200px] md:h-auto">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Why our equipment */}
      <div className="bg-primary/5 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Zašto je naša oprema posebna</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Najsuvremenija tehnologija</h3>
            <p className="text-sm text-muted-foreground">
              Redovito obnavljamo našu opremu najnovijim modelima vodećih svjetskih proizvođača medicinske tehnologije.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Sigurnost i preciznost</h3>
            <p className="text-sm text-muted-foreground">
              Naša oprema udovoljava najvišim standardima sigurnosti i pruža precizne rezultate, što omogućava točnu dijagnostiku.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Brza i neinvazivna dijagnostika</h3>
            <p className="text-sm text-muted-foreground">
              Većina naših dijagnostičkih postupaka je potpuno bezbolna i neinvazivna, uz minimalno vrijeme čekanja na rezultate.
            </p>
          </div>
        </div>
      </div>

      {/* Standards and certifications */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Standardi i certifikati</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-6">
              Sva medicinska oprema u Poliklinici Agram zadovoljava najviše europske i međunarodne standarde 
              kvalitete i sigurnosti. Naši uređaji posjeduju CE oznaku koja potvrđuje usklađenost s 
              EU direktivama o medicinskim uređajima.
            </p>
            <p className="text-muted-foreground mb-6">
              Oprema se redovito servisira i kalibrira prema strogim protokolima, a naše tehničko 
              osoblje prolazi kontinuiranu edukaciju o pravilnom rukovanju i održavanju.
            </p>
            <p className="text-muted-foreground">
              Poliklinika Agram također posjeduje certifikat sustava upravljanja kvalitetom ISO 9001:2015, 
              što dodatno potvrđuje našu predanost pružanju visokokvalitetnih zdravstvenih usluga.
            </p>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg"
              alt="Medicinski laboratorij"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-700"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Naručite se na pregled</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Naši stručnjaci uz pomoć najsuvremenije opreme pružit će vam najbolju moguću zdravstvenu skrb. 
          Naručite se na pregled i uvjerite se u kvalitetu naših usluga.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/kontakt">
            <Button className="px-8 transition-all hover:shadow-md hover:translate-y-[-2px]">
              Kontaktirajte nas
            </Button>
          </Link>
          <Link href="/usluge">
            <Button variant="outline" className="px-8 transition-all hover:shadow-md hover:translate-y-[-2px]">
              Pregledajte naše usluge
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 