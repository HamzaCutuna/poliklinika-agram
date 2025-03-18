import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

export function Doctors() {
  // Featured doctors from our full list
  const featuredDoctors = [
    {
      id: 1,
      name: 'Dr. Omer Perva',
      title: 'Kardiolog',
      about: 'Dr. Omer Perva je specijalista interne medicine, subspecijalist kardiologije. Profesionalni interesi: ehokardiografija, neinvazivne kardiološke dijagnostičke procedure.',
      imageUrl: '/images/omer.jpg',
      slug: 'dr-omer-perva'
    },
    {
      id: 6,
      name: 'Dr. Rajna Stanušić',
      title: 'Radiolog',
      about: 'Dr. Rajna Stanušić je specijalistica dijagnostičke radiologije. Profesionalni interes obuhvata područje dijagnostičke radiologije.',
      imageUrl: '/images/rajna.jpg',
      slug: 'dr-rajna-stanusic'
    },
    {
      id: 3,
      name: 'Dr. Hana Helppikangas-Hunara',
      title: 'Dermatolog',
      about: 'Prim. mr. sc. Hana Helppikangas-Hunara je specijalistica dermatovenerologije. Profesionalni interesi uključuju dermatoskopiju i dermokozmetologiju.',
      imageUrl: '/images/hana.jpg',
      slug: 'dr-hana-helppikangas-hunara'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upoznajte naše stručnjake</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Naš tim čine vrhunski medicinski stručnjaci s dugogodišnjim iskustvom u različitim medicinskim područjima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDoctors.map(doctor => (
            <Link href={`/doktori/${doctor.slug}`} key={doctor.id} className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="relative h-[350px] overflow-hidden">
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                    className="transition-transform group-hover:scale-105 duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">{doctor.name}</h3>
                  <p className="text-primary/90 font-medium mb-3">{doctor.title}</p>
                  <p className="text-sm text-muted-foreground mb-5 line-clamp-2 h-[40px]">
                    {doctor.about.split('.')[0]}.
                  </p>
                  <Button variant="outline" className="w-full transition-all group-hover:bg-primary group-hover:text-white">
                    Pogledaj profil
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/doktori">
            <Button size="lg" className="transition-all hover:shadow-md hover:translate-y-[-2px]">
              Upoznajte cijeli tim
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">Liječnika specijalista</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <p className="text-muted-foreground">Godina iskustva</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">10k+</div>
            <p className="text-muted-foreground">Zadovoljnih pacijenata</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <p className="text-muted-foreground">Medicinskih usluga</p>
          </div>
        </div>
      </div>
    </section>
  );
} 