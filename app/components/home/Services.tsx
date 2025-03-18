import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

// Define our services
const services = [
  {
    id: 1,
    icon: '/icons/cardiology.svg',
    title: 'Kardiologija',
    description: 'Specijalistički pregledi srca i krvnih žila uz najsuvremeniju dijagnostičku opremu.',
    link: '/usluge/kardiologija',
    imageUrl: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg'
  },
  {
    id: 2,
    icon: '/icons/dermatology.svg',
    title: 'Dermatologija',
    description: 'Dijagnostika i liječenje kožnih bolesti, estetska dermatologija, pregled mladeža.',
    link: '/usluge/dermatologija',
    imageUrl: '/images/dermatologija.jpg'
  },
  {
    id: 3,
    icon: '/icons/gynecology.svg',
    title: 'Ginekologija',
    description: 'Kompletna ginekološka dijagnostika i liječenje uz vrhunsku tehnologiju i stručnjake.',
    link: '/usluge/ginekologija',
    imageUrl: '/images/ginekologija.jpg'
  }
];

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Naše specijalizirane usluge</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pružamo širok spektar medicinskih usluga koristeći najsuvremeniju tehnologiju
            i stručnjake s dugogodišnjim iskustvom u medicini.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
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
        
        <div className="mt-16 text-center">
          <Link href="/usluge">
            <Button variant="outline" size="lg" className="px-8">
              Pogledaj sve usluge
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 