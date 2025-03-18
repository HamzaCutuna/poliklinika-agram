import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

// Specialized services with dedicated pages
const specializedServices = [
  {
    title: 'Kardiologija',
    description: 'Specijalistički pregledi srca i krvnih žila uz najsuvremeniju dijagnostičku opremu.',
    icon: '/icons/cardiology.svg',
    link: '/usluge/kardiologija',
    imageUrl: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg'
  },
  {
    title: 'Dermatologija',
    description: 'Dijagnostika i liječenje kožnih bolesti, estetska dermatologija, pregled mladeža.',
    icon: '/icons/dermatology.svg',
    link: '/usluge/dermatologija',
    imageUrl: '/images/dermatologija.jpg'
  },
  {
    title: 'Ginekologija',
    description: 'Kompletna ginekološka dijagnostika i liječenje uz vrhunsku tehnologiju i stručnjake.',
    icon: '/icons/gynecology.svg',
    link: '/usluge/ginekologija',
    imageUrl: '/images/ginekologija.jpg'
  },
  {
    title: 'Radiologija',
    description: 'Vrhunska radiološka dijagnostika: MR, CT, mamografija, UZV, denzitometrija.',
    icon: '/icons/radiology.svg',
    link: '/usluge/radiologija',
    imageUrl: '/images/radiologija.jpg'
  },
  {
    title: 'Laboratorij',
    description: 'Brza i pouzdana laboratorijska dijagnostika za sve vrste laboratorijskih pretraga.',
    icon: '/icons/laboratory.svg',
    link: '/usluge/laboratorij',
    imageUrl: '/images/labaratorij.jpg'
  },
  {
    title: 'Citologija',
    description: 'Rana dijagnostika i prevencija bolesti kroz mikroskopsku analizu stanica.',
    icon: '/icons/ultrasound.svg',
    link: '/usluge/citologija',
    imageUrl: '/images/citologija3.jpg'
  },
  {
    title: 'Oftalmologija',
    description: 'Kompletna dijagnostika i liječenje bolesti oka uz moderne tehnologije i stručnjake.',
    icon: '/icons/eye.svg',
    link: '/usluge/oftalmologija',
    imageUrl: 'https://images.pexels.com/photos/5752287/pexels-photo-5752287.jpeg'
  },
  {
    title: 'Gastroenterologija',
    description: 'Dijagnostika i liječenje bolesti probavnog sustava: želuca, crijeva, jetre i gušterače.',
    icon: '/icons/stomach.svg',
    link: '/usluge/gastroenterologija',
    imageUrl: '/images/gastroenterologija.jpg'
  },
  {
    title: 'Endokrinologija',
    description: 'Dijagnostika i liječenje bolesti hormona i endokrinih žlijezda poput štitnjače i gušterače.',
    icon: '/icons/endocrine.svg',
    link: '/usluge/endokrinologija',
    imageUrl: '/images/endokrinologija.jpg'
  },
  {
    title: 'Opća interna medicina',
    description: 'Sveobuhvatna dijagnostika i liječenje bolesti unutarnjih organa za odrasle osobe.',
    icon: '/icons/internal.svg',
    link: '/usluge/opca-interna',
    imageUrl: 'https://images.pexels.com/photos/6823562/pexels-photo-6823562.jpeg'
  },
  {
    title: 'Sistematski pregled',
    description: 'Sveobuhvatni preventivni pregled za muškarce i žene s ciljem ranog otkrivanja zdravstvenih problema.',
    icon: '/icons/checkup.svg',
    link: '/usluge/sistematski-pregled',
    imageUrl: '/images/sistematski1.jpg'
  },
  {
    title: 'Sistematski pregled II',
    description: 'Napredni sistematski pregled prilagođen rukovoditeljima i menadžerima uz specijalizirane pretrage.',
    icon: '/icons/executive.svg',
    link: '/usluge/sistematski-pregled-ii',
    imageUrl: '/images/agram4.jpg'
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Naše specijalizirane usluge</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Poliklinika Agram pruža širok spektar medicinskih usluga, od preventivnih pregleda do 
          specijaliziranih dijagnostičkih i terapijskih postupaka. Detaljno istražite naše specijalizirane usluge koje pružaju sveobuhvatnu medicinsku brigu 
          i koriste najsuvremenije tehnike i opremu.
        </p>
      </div>

      {/* Specialized services with dedicated pages */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializedServices.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card shadow-md transition-all hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="relative p-6">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Image 
                      src={service.icon} 
                      alt={`${service.title} icon`} 
                      width={24} 
                      height={24} 
                      className="text-primary"
                    />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="mb-6 text-muted-foreground">
                  {service.description}
                </p>
                
                <Link href={service.link}>
                  <Button variant="secondary" className="w-full">
                    Saznaj više
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      {/* Call to Action */}
      <div className="rounded-2xl bg-primary/10 p-8 md:p-12 text-center mt-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Trebate više informacija?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Naši medicinski stručnjaci su tu da odgovore na sva vaša pitanja i pomognu vam odabrati
          odgovarajuće usluge za vaše zdravstvene potrebe.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/kontakt">
            <Button className="px-8 transition-all hover:shadow-md hover:translate-y-[-2px]">
              Kontaktirajte nas
            </Button>
          </Link>
          <Link href="/doktori">
            <Button variant="outline" className="px-8 transition-all hover:shadow-md hover:translate-y-[-2px]">
              Upoznajte naše liječnike
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 