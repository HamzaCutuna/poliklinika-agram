import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { notFound } from 'next/navigation';

// Same doctors data as in the main doctors page
const doctors = [
  {
    id: 1,
    name: 'Dr. Omer Perva',
    title: 'Kardiolog',
    slug: 'dr-omer-perva',
    specialty: 'Interna medicina, subspecijalist kardiologije',
    education: 'Medicinski fakultet Univerziteta u Sarajevu',
    experience: 'Preko 15 godina iskustva',
    about: 'Dr. Omer Perva je specijalista interne medicine, subspecijalist kardiologije. Nakon specijalizacije usavršavao se u Leipzigu i Berlinu. 2011. godine dobiva počasno zvanje primarijus. U Poliklinici AGRAM radi od 2022. godine. Od 2000. do 2021. godine radio je u KCUS-u, u Klinici za kardiovaskularnu kirurgiju. Radio je u ratnoj ambulanti Sokolovići, Ilidža, te od 1997. do 2003. godine u Lječilištu Reumal Fojnica. Autor je brojnih stručnih radova.',
    expertise: ['Ehokardiografija', 'Neinvazivne kardiološke dijagnostičke procedure', 'Ishemijska koronarna bolest', 'Urođene i stečene valvularne bolesti', 'Kongenitalne anomalije srca'],
    imageUrl: '/images/omer.jpg',
    detailedBio: 'Dr. Omer Perva je renomirani kardiolog s preko 15 godina iskustva u liječenju kardiovaskularnih bolesti. Diplomirao je na Medicinskom fakultetu Univerziteta u Sarajevu, gdje je također završio specijalizaciju iz interne medicine. Subspecijalizaciju iz kardiologije završio je na prestižnoj klinici, usavršavajući svoje vještine u području interventne kardiologije. Dr. Perva kontinuirano prati najnovija dostignuća u kardiologiji, redovito sudjelujući na međunarodnim kongresima i stručnim usavršavanjima. Njegova predanost pacijentima i stručnost učinili su ga jednim od vodećih kardiologa u regiji. Posebno je fokusiran na preventivnu kardiologiju i rano otkrivanje kardiovaskularnih bolesti.'
  },
  {
    id: 2,
    name: 'Dr. Danijela Petrović Popadić',
    title: 'Ginekolog',
    slug: 'dr-danijela-petrovic-popadic',
    specialty: 'Ginekologija i opstretricija, subspecijalist fertiliteta i steriliteta',
    education: 'Medicinski fakultet Univerziteta u Kragujevcu',
    experience: 'Preko 12 godina iskustva',
    about: 'Diplomirala je na Medicinskom fakultetu Univerziteta u Kragujevcu 1999. godine, a nakon završetka studija zaposlila se u Općoj bolnici Trebinje na Odjelu transfuzije i kirurgije. Specijalizaciju iz ginekologije i opstetricije završila je 2007. godine s najboljom ocjenom.   2014. godine završava subspecijalizaciju iz fertiliteta i steriliteta u Novom Sadu u Klinici za ginekologiju i akušerstvo Betanija na temu „Transvaginalna laparoskopija u dijagnostici steriliteta kod žena“. 2022. godine u travnju stekla je zvanje primarijus.',
    expertise: ['Ginekološki pregledi', 'Ginekološki ultrazvuk', 'Trudnička skrb', 'Liječenje neplodnosti', 'Ginekološka endokrinologija', 'Medicinski potpomognuta oplodnja'],
    imageUrl: '/images/danijela.jpg',
    detailedBio: 'Diplomirala je na Medicinskom fakultetu Univerziteta u Kragujevcu 1999. godine, a nakon završetka studija zaposlila se u Općoj bolnici Trebinje na Odjelu transfuzije i kirurgije. Specijalizaciju iz ginekologije i opstetricije završila je 2007. godine s najboljom ocjenom.   2014. godine završava subspecijalizaciju iz fertiliteta i steriliteta u Novom Sadu u Klinici za ginekologiju i akušerstvo Betanija na temu „Transvaginalna laparoskopija u dijagnostici steriliteta kod žena“. 2022. godine u travnju stekla je zvanje primarijus.'
  },
  {
    id: 3,
    name: 'Dr. Hana Helppikangas-Hunara',
    title: 'Dermatolog',
    slug: 'dr-hana-helppikangas-hunara',
    specialty: 'Dermatoskopija, rano otkrivanje melanoma, dermokozmetologija',
    education: 'Medicinski fakultet Univerziteta u Sarajevu',
    experience: 'Preko 10 godina iskustva',
    about: 'Prim. Mr. sc. Hana Helppikangas-Hunara, dr. med., specijalist dermatovenerologije, zaposlena je Poliklinici AGRAM od 2020. godine. Diplomirala je 2004. godine na Medicinskom fakultetu Univerziteta u Sarajevu. Nakon stjecanja naziva specijalista dermatovenerologije 2011. godine, magistrirala je 2016. godine na Medicinskom fakultetu Univerziteta u Sarajevu. Predsjednica je prvog Euro-Azijskog Melanom Kongresa u Bosni i Hercegovini, održanog 2014. godine te je nacionalna koordinatorica i voditeljica Eurodermoscopy studija za Bosnu i Hercegovinu.',
    expertise: ['Dermatoskopija', 'Rano otkrivanje melanoma', 'Dermokozmetologija', 'Liječenje akni', 'Estetska dermatologija', 'Laserski tretmani kože'],
    imageUrl: '/images/hana.jpg',
    detailedBio: 'Prim. Mr. sc. Hana Helppikangas-Hunara, dr. med., specijalist dermatovenerologije, zaposlena je Poliklinici AGRAM od 2020. godine. Diplomirala je 2004. godine na Medicinskom fakultetu Univerziteta u Sarajevu. Nakon stjecanja naziva specijalista dermatovenerologije 2011. godine, magistrirala je 2016. godine na Medicinskom fakultetu Univerziteta u Sarajevu. Predsjednica je prvog Euro-Azijskog Melanom Kongresa u Bosni i Hercegovini, održanog 2014. godine te je nacionalna koordinatorica i voditeljica Eurodermoscopy studija za Bosnu i Hercegovinu.'
  },
  {
    id: 4,
    name: 'Dr. Maja Stančić',
    title: 'Internista',
    slug: 'dr-maja-stancic',
    specialty: 'Endokrinologija, kardiologija, ultrazvuk srca',
    education: 'Medicinski fakultet Sveučilišta u Zagrebu',
    experience: 'Preko 8 godina iskustva',
    about: 'Maja Stančić, dr. med., specijalist interne medicine, zaposlena je u Poliklinici AGRAM od 2019. godine. Nakon završene osnovne i srednje škole u Sarajevu, diplomirala je na Medicinskom fakultetu Sveučilišta u Zagrebu. Po povratku u Bosnu i Hercegovinu sve do početka specijalizacije, praktično se usavršavala u Domu zdravlja Nova Bila, kao liječnik širom Srednjobosanskog kantona te radom u Hitnoj medicinskoj pomoći u Travniku. 2010. godine polaganjem specijalističkog ispita u Kliničkom centru Univerziteta u Sarajevu postala je specijalist interne medicine. Maja Stančić obavlja funkciju v. d. glavnog ravnatelja Poliklinike AGRAM od 2023. godine.',
    expertise: ['Endokrinologija', 'Kardiologija', 'Ultrazvuk srca', 'Dijabetes', 'Hipertenzija', 'Poremećaji metabolizma'],
    imageUrl: '/images/maja.jpg',
    detailedBio: 'Maja Stančić, dr. med., specijalist interne medicine, zaposlena je u Poliklinici AGRAM od 2019. godine. Nakon završene osnovne i srednje škole u Sarajevu, diplomirala je na Medicinskom fakultetu Sveučilišta u Zagrebu. Po povratku u Bosnu i Hercegovinu sve do početka specijalizacije, praktično se usavršavala u Domu zdravlja Nova Bila, kao liječnik širom Srednjobosanskog kantona te radom u Hitnoj medicinskoj pomoći u Travniku. 2010. godine polaganjem specijalističkog ispita u Kliničkom centru Univerziteta u Sarajevu postala je specijalist interne medicine. Maja Stančić obavlja funkciju v. d. glavnog ravnatelja Poliklinike AGRAM od 2023. godine.'
  },
  {
    id: 5,
    name: 'Dr. Milan Damjančević',
    title: 'Internista',
    slug: 'dr-milan-damjancevic',
    specialty: 'Interna medicina',
    education: 'Medicinski fakultet Univerziteta u Istočnom Sarajevu',
    experience: 'Preko 14 godina iskustva',
    about: 'Milan Damjančević, dr. med., specijalist interne medicine diplomirao je na Medicinskom i fakultetu u Foči, Univerziteta u Istočnom Sarajevu 2009. godine. Zadnje tri godine tijekom studiranja bio je demonstrator na katedri iz biokemije. U Poliklinici AGRAM zaposlen je od 2021. godine. U Kliničkom centru Srbije 2015. godine završio je tečaj Ultrasonografije abdomena, urotrakta, mekih tkiva i štitaste žlijezde. Specijalistički ispit iz Interne medicine položio je 2017. godine na Medicinskom fakultetu u Foči. Objavio je više članaka na stručnim medicinskim internetskim stranicama.',
    expertise: ['Interventne endoskopske metode', 'Upalne bolesti crijeva', 'Funkcionalna oboljenja digestivnog trakta', 'Gastroenterologija', 'Endoskopija'],
    imageUrl: '/images/milan.jpg',
    detailedBio: 'Milan Damjančević, dr. med., specijalist interne medicine diplomirao je na Medicinskom i fakultetu u Foči, Univerziteta u Istočnom Sarajevu 2009. godine. Zadnje tri godine tijekom studiranja bio je demonstrator na katedri iz biokemije. U Poliklinici AGRAM zaposlen je od 2021. godine. U Kliničkom centru Srbije 2015. godine završio je tečaj Ultrasonografije abdomena, urotrakta, mekih tkiva i štitaste žlijezde. Specijalistički ispit iz Interne medicine položio je 2017. godine na Medicinskom fakultetu u Foči. Objavio je više članaka na stručnim medicinskim internetskim stranicama.'
  },
  {
    id: 6,
    name: 'Dr. Rajna Stanušić',
    title: 'Radiolog',
    slug: 'dr-rajna-stanusic',
    specialty: 'Dijagnostička radiologija',
    education: 'Medicinski fakultet Univerziteta u Istočnom Sarajevu',
    experience: 'Preko 9 godina iskustva',
    about: 'Rajna Stanušić, dr. med., specijalist radiologije diplomirala je na Medicinskom fakultetu Foča, Univerziteta u Istočnom Sarajevu. Specijalizaciju iz radiologije završila je u Univerzitetsko kliničkom centru Banja Luka 2017. godine. Od 2008. do 2011. godine radila je kao doktor opće medicine u Domu zdravlja Novo Goražde, a od 2011. do 2021. godine u Univerzitetskoj bolnici Foča, od čega od 2017. godine nakon položenog specijalističkog ispita radi kao specijalist radiologije. U Poliklinici AGRAM zaposlena je od 2022. godine.',
    expertise: ['Dijagnostička radiologija', 'Ultrazvučna dijagnostika', 'CT dijagnostika', 'Mamografija', 'Doppler ultrazvuk'],
    imageUrl: '/images/rajna.jpg',
    detailedBio: 'Rajna Stanušić, dr. med., specijalist radiologije diplomirala je na Medicinskom fakultetu Foča, Univerziteta u Istočnom Sarajevu. Specijalizaciju iz radiologije završila je u Univerzitetsko kliničkom centru Banja Luka 2017. godine. Od 2008. do 2011. godine radila je kao doktor opće medicine u Domu zdravlja Novo Goražde, a od 2011. do 2021. godine u Univerzitetskoj bolnici Foča, od čega od 2017. godine nakon položenog specijalističkog ispita radi kao specijalist radiologije. U Poliklinici AGRAM zaposlena je od 2022. godine.'
  },
  {
    id: 7,
    name: 'Dr. Tatjana Ružić Arežina',
    title: 'Oftalmolog',
    slug: 'dr-tatjana-ruzic-arezina',
    specialty: 'Oftalmologija',
    education: 'Medicinski fakultet Univerziteta u Banjoj Luci',
    experience: 'Preko 20 godina iskustva',
    about: 'Tatjana Ružić Arežina, dr. med., specijalist oftalmologije, zaposlena je u Poliklinici AGRAM od 2020. godine. Diplomirala je na Medicinskom fakultetu Univerziteta u Banjoj Luci. Specijalizaciju iz oftalmologije završila je na Vojnomedicinskoj akademiji u Beogradu 2000. godine. Od 2001. godine radila je kao oftalmolog u tadašnjem Kliničkom centru Istočno Sarajevo, kasnije Opštoj bolnici Kasindo, gdje je u nekoliko navrata obavljala funkciju šefa Očnog odjela. Kao klinički oftalmolog bavila se kirurgijom i dijagnostikom, kao i ambulatno-polikliničkim radom, pri čemu je primjenjivala multidisciplinarni pristup u radu usko surađujući sa specijalistima gotovo svih oblasti medicine. Kontinuirano se educira kroz različite tečajeve te sudjeluje na domaćim i međunarodnim skupovima, simpozijumima i kongresima.',
    expertise: ['Neurooftalmologija', 'OCT dijagnostika', 'UZ oka i orbite', 'Glaukom', 'Uveitisi'],
    imageUrl: '/images/tatjana.jpg',
    detailedBio: 'Tatjana Ružić Arežina, dr. med., specijalist oftalmologije, zaposlena je u Poliklinici AGRAM od 2020. godine. Diplomirala je na Medicinskom fakultetu Univerziteta u Banjoj Luci. Specijalizaciju iz oftalmologije završila je na Vojnomedicinskoj akademiji u Beogradu 2000. godine. Od 2001. godine radila je kao oftalmolog u tadašnjem Kliničkom centru Istočno Sarajevo, kasnije Opštoj bolnici Kasindo, gdje je u nekoliko navrata obavljala funkciju šefa Očnog odjela. Kao klinički oftalmolog bavila se kirurgijom i dijagnostikom, kao i ambulatno-polikliničkim radom, pri čemu je primjenjivala multidisciplinarni pristup u radu usko surađujući sa specijalistima gotovo svih oblasti medicine. Kontinuirano se educira kroz različite tečajeve te sudjeluje na domaćim i međunarodnim skupovima, simpozijumima i kongresima.'
  },
  {
    id: 8,
    name: 'Dr. Nina Jurić',
    title: 'Citolog',
    slug: 'dr-nina-juric',
    specialty: 'Klinička citologija',
    education: 'Medicinski fakultet Univerziteta u Sarajevu',
    experience: 'Preko 20 godina iskustva',
    about: 'Prim. mr. sc. Nina Jurić, dr. med., specijalist kliničke citologije, u Poliklinici AGRAM radi od 2008. godine. Diplomirala je na Medicinskom fakultetu Univerziteta u Sarajevu, a diplomu je nostrificirala na Medicinskom fakultetu Sveučilišta u Zagrebu. Specijalizaciju je završila u Kliničkim bolnicama Merkur i Dubrava te u Kliničkom bolničkom centru Zagreb. U tijeku specijalizacije tri je mjeseca provela na stručnom usavršavanju u Londonu, u Cytologic Laboratory, Department of Histopathology – UCL Hospitals. Od 2001. godine radila je u Kliničkom centru Univerziteta u Sarajevu kao šef Odjela za citologiju gdje je stekla iskustvo iz opće citologije u radu s bolničkim i polikliničkim pacijentima.',
    expertise: ['Citološka punkcija tumorskih tvorbi', 'Iscjedak iz dojke', 'Citologija urina', 'PAPA test', 'Citološka dijagnostika limfnih čvorova'],
    imageUrl: '/images/nina.jpg',
    detailedBio: 'Prim. mr. sc. Nina Jurić, dr. med., specijalist kliničke citologije, u Poliklinici AGRAM radi od 2008. godine. Diplomirala je na Medicinskom fakultetu Univerziteta u Sarajevu, a diplomu je nostrificirala na Medicinskom fakultetu Sveučilišta u Zagrebu. Specijalizaciju je završila u Kliničkim bolnicama Merkur i Dubrava te u Kliničkom bolničkom centru Zagreb. U tijeku specijalizacije tri je mjeseca provela na stručnom usavršavanju u Londonu, u Cytologic Laboratory, Department of Histopathology – UCL Hospitals. Od 2001. godine radila je u Kliničkom centru Univerziteta u Sarajevu kao šef Odjela za citologiju gdje je stekla iskustvo iz opće citologije u radu s bolničkim i polikliničkim pacijentima.'
  },
  {
    id: 9,
    name: 'Dr. Hana Štimjanin',
    title: 'Ginekolog',
    slug: 'dr-hana-stimjanin-hodzic',
    specialty: 'Specijalista ginekologije i akušerstva',
    education: 'Medicinski fakultet Univerziteta u Sarajevu',
    experience: 'Preko 10 godina iskustva',
    about: 'Dr. Hana je Medicinski fakultet završila u Sarajevu 2012. godine. Svojim pacijenticama posvećuje izuzetnu pažnju i kontinuirano radi na profesionalnom usavršavanju kako bi pružila najnapredniji i najindividualniji pristup, uvijek u toku s novim trendovima u ginekologiji i akušerstvu. Autorica je brojnih naučno-istraživačkih radova,  redovno učestvuje na webinarima i stručnim predavanjima dijeleći svoje znanje i iskustvo sa stručnom zajednicom.',
    expertise: ['Ginekologija', 'Akušerstvo', 'Ginekološka endokrinologija', 'Ginekološka onkologija', 'PAPA test'],
    imageUrl: '/images/hana2.jpg',
    detailedBio: 'Dr. Hana je Medicinski fakultet završila u Sarajevu 2012. godine. Svojim pacijenticama posvećuje izuzetnu pažnju i kontinuirano radi na profesionalnom usavršavanju kako bi pružila najnapredniji i najindividualniji pristup, uvijek u toku s novim trendovima u ginekologiji i akušerstvu. Autorica je brojnih naučno-istraživačkih radova,  redovno učestvuje na webinarima i stručnim predavanjima dijeleći svoje znanje i iskustvo sa stručnom zajednicom.'
  }
];

// Get a doctor by slug
const getDoctor = async (slug: string) => {
  return doctors.find(doctor => doctor.slug === slug);
};

export default async function DoctorProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const doctor = await getDoctor(params.slug);

  // If doctor not found, return 404
  if (!doctor) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/doktori" className="text-primary hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Povratak na listu liječnika
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="lg:col-span-1">
            <div className="relative h-[400px] lg:h-full">
              <Image
                src={doctor.imageUrl}
                alt={doctor.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          
          <div className="lg:col-span-2 p-8">
            <h1 className="text-3xl font-bold mb-2 text-primary">{doctor.name}</h1>
            <h2 className="text-xl text-muted-foreground mb-6">{doctor.title}</h2>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Specijalnost</h3>
                  <p className="text-muted-foreground">{doctor.specialty}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Obrazovanje</h3>
                  <p className="text-muted-foreground">{doctor.education}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Iskustvo</h3>
                  <p className="text-muted-foreground">{doctor.experience}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">O doktoru</h3>
              <p className="text-muted-foreground">{doctor.about}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Područja stručnosti</h3>
              <div className="flex flex-wrap gap-2">
                {doctor.expertise.map((item, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/kontakt">
                <Button className="w-full sm:w-auto transition-all hover:shadow-md hover:translate-y-[-2px]">
                  Naručite se na pregled
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar doctors */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Ostali specijalisti u području {doctor.title}</h2>
        
        {/* Check if there are other doctors with the same specialty */}
        {doctors.filter(d => d.title === doctor.title && d.id !== doctor.id).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors
              .filter(d => d.title === doctor.title && d.id !== doctor.id)
              .slice(0, 3)
              .map((similarDoctor) => (
                <Link href={`/doktori/${similarDoctor.slug}`} key={similarDoctor.id}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px]">
                    <div className="relative h-[280px] overflow-hidden">
                      <Image
                        src={similarDoctor.imageUrl}
                        alt={similarDoctor.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                        className="transition-transform hover:scale-105 duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-1">{similarDoctor.name}</h3>
                      <p className="text-primary font-medium mb-3">{similarDoctor.title}</p>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2 h-[40px]">
                        {`${similarDoctor.specialty}. ${similarDoctor.experience}.`}
                      </p>
                      <Button variant="outline" className="w-full transition-all hover:bg-primary hover:text-white">
                        Pogledaj profil
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        ) : (
          <div>
            <p className="text-muted-foreground mb-8">Trenutno nemamo drugih specijalista u području {doctor.title}. Pogledajte ostale članove našeg tima:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors
                .filter(d => d.id !== doctor.id)
                .slice(0, 3)
                .map((otherDoctor) => (
                  <Link href={`/doktori/${otherDoctor.slug}`} key={otherDoctor.id}>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px]">
                      <div className="relative h-[280px] overflow-hidden">
                        <Image
                          src={otherDoctor.imageUrl}
                          alt={otherDoctor.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                          className="transition-transform hover:scale-105 duration-700"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-1">{otherDoctor.name}</h3>
                        <p className="text-primary font-medium mb-3">{otherDoctor.title}</p>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 h-[40px]">
                          {`${otherDoctor.specialty}. ${otherDoctor.experience}.`}
                        </p>
                        <Button variant="outline" className="w-full transition-all hover:bg-primary hover:text-white">
                          Pogledaj profil
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
      
      {/* CTA section */}
      <div className="mt-20 bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Trebate zakazati pregled?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Kontaktirajte nas da zakažete pregled kod dr. {doctor.name.split(' ')[1]} ili bilo kojeg drugog specijaliste iz našeg tima.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/kontakt">
            <Button className="px-8 transition-all hover:shadow-md hover:translate-y-[-2px]">
              Kontaktirajte nas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 