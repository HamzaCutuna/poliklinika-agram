'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

// Real doctors data from Poliklinika Agram Sarajevo
const doctors = [
  {
    id: 1,
    name: 'Dr. Omer Perva',
    title: 'Kardiolog',
    slug: 'dr-omer-perva',
    specialty: 'Interna medicina',
    education: 'Medicinski fakultet Univerziteta u Sarajevu',
    experience: 'Preko 15 godina iskustva',
    about: 'Dr. Omer Perva je specijalista interne medicine, subspecijalist kardiologije. Profesionalni interesi: ehokardiografija, neinvazivne kardiološke dijagnostičke procedure, ishemijska koronarna bolest, urođene i stečene valvularne bolesti, kongenitalne anomalije srca.',
    expertise: ['Ehokardiografija', 'Neinvazivne kardiološke dijagnostičke procedure', 'Ishemijska koronarna bolest', 'Urođene i stečene valvularne bolesti', 'Kongenitalne anomalije srca'],
    imageUrl: '/images/omer.jpg',
  },
  {
    id: 2,
    name: 'Dr. Danijela Petrović Popadić',
    title: 'Ginekolog',
    slug: 'dr-danijela-petrovic-popadic',
    specialty: 'Ginekologija',
    education: 'Medicinski fakultet Univerziteta u Sarajevu',
    experience: 'Preko 12 godina iskustva',
    about: 'Prim. dr. Danijela Petrović Popadić je specijalistica ginekologije i opstetricije, subspecijalistica fertiliteta i steriliteta. Dugogodišnje radno iskustvo stekla je u Zavodu za humanu reprodukciju KCU Sarajevo.',
    expertise: ['Ginekološki pregledi', 'Ginekološki ultrazvuk', 'Trudnička skrb', 'Liječenje neplodnosti', 'Ginekološka endokrinologija', 'Medicinski potpomognuta oplodnja'],
    imageUrl: '/images/danijela.jpg',
  },
  {
    id: 3,
    name: 'Dr. Hana Štimjanin',
    title: 'Ginekolog',
    slug: 'dr-hana-stimjanin-hodzic',
    specialty: 'Ginekologija',
    education: 'Medicinski fakultet Univerziteta u Sarajevu',
    experience: 'Preko 10 godina iskustva',
    about: 'Dr. Hana Štimjanin Hodžić je izuzetno posvećena svojim pacijenticama i kontinuirano radi na profesionalnom usavršavanju kako bi individualni pristup učinila još naprednijim i u toku sa novim trendovima u ginekologiji i akušerstvu.',
    expertise: ['Ginekologija', 'Akušerstvo', 'Ginekološka endokrinologija', 'Ginekološka onkologija', 'PAPA test'],
    imageUrl: '/images/hana2.jpg'
  },
  {
    id: 4,
    name: 'Dr. Hana Helppikangas-Hunara',
    title: 'Dermatolog',
    slug: 'dr-hana-helppikangas-hunara',
    specialty: 'Dermatovenerologija',
    education: 'Medicinski fakultet Univerziteta u Sarajevu',
    experience: 'Preko 10 godina iskustva',
    about: 'Prim. mr. sc. Hana Helppikangas-Hunara je specijalistica dermatovenerologije. Profesionalni interesi uključuju dermatoskopiju, rano otkrivanje melanoma i dermokozmetologiju.',
    expertise: ['Dermatoskopija', 'Rano otkrivanje melanoma', 'Dermokozmetologija', 'Liječenje akni', 'Estetska dermatologija', 'Laserski tretmani kože'],
    imageUrl: '/images/hana.jpg',
  },
  {
    id: 5,
    name: 'Dr. Maja Stančić',
    title: 'Internista',
    slug: 'dr-maja-stancic',
    specialty: 'Interna medicina',
    education: 'Medicinski fakultet Univerziteta u Sarajevu',
    experience: 'Preko 8 godina iskustva',
    about: 'Dr. Maja Stančić je specijalistica interne medicine. Profesionalni interesi uključuju endokrinologiju, kardiologiju i ultrazvuk srca.',
    expertise: ['Endokrinologija', 'Kardiologija', 'Ultrazvuk srca', 'Dijabetes', 'Hipertenzija', 'Poremećaji metabolizma'],
    imageUrl: '/images/maja.jpg',
  },
  {
    id: 6,
    name: 'Dr. Milan Damjančević',
    title: 'Internista',
    slug: 'dr-milan-damjancevic',
    specialty: 'Interna medicina',
    education: 'Medicinski fakultet Univerziteta u Sarajevu',
    experience: 'Preko 14 godina iskustva',
    about: 'Dr. Milan Damjančević je specijalist interne medicine. Profesionalni interesi uključuju interventne endoskopske metode, upalne bolesti crijeva i funkcionalna oboljenja digestivnog trakta.',
    expertise: ['Interventne endoskopske metode', 'Upalne bolesti crijeva', 'Funkcionalna oboljenja digestivnog trakta', 'Gastroenterologija', 'Endoskopija'],
    imageUrl: '/images/milan.jpg',
  },
  {
    id: 7,
    name: 'Dr. Rajna Stanušić',
    title: 'Radiolog',
    slug: 'dr-rajna-stanusic',
    specialty: 'Dijagnostička radiologija',
    education: 'Medicinski fakultet Univerziteta u Sarajevu',
    experience: 'Preko 9 godina iskustva',
    about: 'Dr. Rajna Stanušić je specijalistica dijagnostičke radiologije. Profesionalni interes obuhvata područje dijagnostičke radiologije.',
    expertise: ['Dijagnostička radiologija', 'Ultrazvučna dijagnostika', 'CT dijagnostika', 'Mamografija', 'Doppler ultrazvuk'],
    imageUrl: '/images/rajna.jpg',
  },
  {
    id: 8,
    name: 'Dr. Tatjana Ružić Arežina',
    title: 'Oftalmolog',
    slug: 'dr-tatjana-ruzic-arezina',
    specialty: 'Oftalmologija',
    education: 'Medicinski fakultet Univerziteta u Banjoj Luci',
    experience: 'Preko 20 godina iskustva',
    about: 'Tatjana Ružić Arežina, dr. med., specijalist oftalmologije, zaposlena je u Poliklinici AGRAM od 2020. godine. Diplomirala je na Medicinskom fakultetu Univerziteta u Banjoj Luci. Specijalizaciju iz oftalmologije završila je na Vojnomedicinskoj akademiji u Beogradu 2000. godine. Od 2001. godine radila je kao oftalmolog u tadašnjem Kliničkom centru Istočno Sarajevo, kasnije Opštoj bolnici Kasindo, gdje je u nekoliko navrata obavljala funkciju šefa Očnog odjela.',
    expertise: ['Neurooftalmologija', 'OCT dijagnostika', 'UZ oka i orbite', 'Glaukom', 'Uveitisi', 'Refrakcijske greške'],
    imageUrl: '/images/tatjana.jpg',
  },
  {
    id: 9,
    name: 'Dr. Nina Jurić',
    title: 'Citolog',
    slug: 'dr-nina-juric',
    specialty: 'Klinička citologija',
    education: 'Medicinski fakultet Univerziteta u Sarajevu',
    experience: 'Preko 7 godina iskustva',
    about: 'Prim. mr. sc. Nina Jurić je specijalistica kliničke citologije. Profesionalni interesi uključuju citološku punkciju tumorskih tvorbi (štitnjača, dojke, limfni čvorovi i ostalo), iscjedak iz dojke, citologiju urina i PAPA test.',
    expertise: ['Citološka punkcija tumorskih tvorbi', 'Iscjedak iz dojke', 'Citologija urina', 'PAPA test', 'Citološka dijagnostika limfnih čvorova'],
    imageUrl: '/images/nina.jpg',
  }
];

// Specialties from real Poliklinika Agram offerings
const specialties = [
  { id: 'all', name: 'Sve' },
  { id: 'kardiolog', name: 'Kardiologija' },
  { id: 'ginekolog', name: 'Ginekologija' },
  { id: 'dermatolog', name: 'Dermatologija' },
  { id: 'internista', name: 'Interna medicina' },
  { id: 'radiolog', name: 'Radiologija' },
  { id: 'oftalmolog', name: 'Oftalmologija' },
  { id: 'citolog', name: 'Citologija' }
];

export default function DoctorsPage() {
  const [activeSpecialty, setActiveSpecialty] = useState('all');
  
  // Filter doctors based on active specialty
  const filteredDoctors = activeSpecialty === 'all' 
    ? doctors 
    : doctors.filter(doctor => doctor.title.toLowerCase() === activeSpecialty.toLowerCase());

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Naš stručni tim liječnika</h1>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Upoznajte naš tim visokokvalificiranih medicinskih stručnjaka koji su predani pružanju 
              najbolje moguće zdravstvene skrbi kroz personalizirani pristup svakom pacijentu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt">
                <Button className="bg-white text-primary hover:bg-white/90 transition duration-300 font-medium">
                  Zakazati pregled
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="specialists" className="container mx-auto px-4 py-16">
        {/* Specialty Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Filtriraj po specijalnosti</h2>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <button
                key={specialty.id}
                onClick={() => setActiveSpecialty(specialty.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeSpecialty === specialty.id
                    ? 'bg-primary text-white font-medium shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {specialty.name}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor) => (
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
                    {`${doctor.specialty}. ${doctor.experience}.`}
                  </p>
                  <Button variant="outline" className="w-full transition-all group-hover:bg-primary group-hover:text-white">
                    Pogledaj profil
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No results message */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">Nema rezultata za odabranu specijalnost</h3>
            <p className="text-muted-foreground mb-6">Molimo odaberite drugu specijalnost ili pogledajte sve naše liječnike</p>
            <Button onClick={() => setActiveSpecialty('all')} className="transition-all">
              Prikaži sve liječnike
            </Button>
          </div>
        )}
      </section>

      {/* Call to action */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Trebate dogovoriti pregled?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas da zakazete pregled kod bilo kojeg od naših specijalista. Naš ljubazni tim je tu da vam pomogne.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/kontakt">
              <Button size="lg" className="px-8 transition-all hover:shadow-md hover:translate-y-[-2px]">
                Kontaktirajte nas
              </Button>
            </Link>
            <Link href="tel:+38733755555">
              <Button variant="outline" size="lg" className="px-8 transition-all hover:shadow-md hover:translate-y-[-2px]">
                Nazovite +387 33 755 555
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 