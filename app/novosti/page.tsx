import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

// Sample news articles data
const newsArticles = [
  {
    id: 1,
    title: 'Važnost redovitih preventivnih pregleda',
    slug: 'vaznost-redovitih-preventivnih-pregleda',
    excerpt: 'Preventivni pregledi ključni su za rano otkrivanje bolesti i održavanje dobrog zdravlja. Saznajte koje preglede trebate obaviti i koliko često.',
    content: 'Preventivni pregledi ključni su za rano otkrivanje bolesti i održavanje dobrog zdravlja. Redoviti pregledi omogućuju otkrivanje zdravstvenih problema prije nego što postanu ozbiljni. Preporučeni preventivni pregledi uključuju mjerenje krvnog tlaka, provjeru razine kolesterola, testiranje na dijabetes, pregled vida, stomatološke preglede, mamografiju za žene, kolonoskopiju za osobe starije od 50 godina i druge preglede ovisno o dobi, spolu i osobnim rizicima. Posjetite svog liječnika kako biste razgovarali o tome koji su preventivni pregledi najvažniji za vas.',
    imageUrl: '/images/novost1.jpg',
    date: '2024-06-15',
    category: 'Preventiva'
  },
  {
    id: 2,
    title: 'Kako prepoznati simptome moždanog udara',
    slug: 'kako-prepoznati-simptome-mozdanog-udara',
    excerpt: 'Brzo prepoznavanje simptoma moždanog udara može spasiti život. Naučite kako prepoznati rane znakove i kada potražiti hitnu medicinsku pomoć.',
    content: 'Brzo prepoznavanje simptoma moždanog udara može spasiti život. Koristite FAST metodu za prepoznavanje moždanog udara: F (Face/Lice) - je li jedna strana lica opuštena? A (Arms/Ruke) - može li osoba podići obje ruke? S (Speech/Govor) - je li govor nerazumljiv ili otežan? T (Time/Vrijeme) - ako primijetite bilo koji od ovih simptoma, odmah nazovite hitnu pomoć. Dodatni simptomi mogu uključivati iznenadnu utrnulost ili slabost u nozi, zbunjenost, poteškoće s vidom, vrtoglavicu ili jaku glavobolju. Svaka minuta je važna jer brza intervencija može smanjiti trajno oštećenje mozga ili spasiti život.',
    imageUrl: '/images/mozdani.jpg',
    date: '2024-05-22',
    category: 'Edukacija'
  },
  {
    id: 3,
    title: 'Zdravi načini za upravljanje stresom',
    slug: 'zdravi-nacini-za-upravljanje-stresom',
    excerpt: 'Kronični stres može negativno utjecati na fizičko i mentalno zdravlje. Otkrijte učinkovite strategije za smanjenje stresa i poboljšanje dobrobiti.',
    content: 'Kronični stres može negativno utjecati na fizičko i mentalno zdravlje, povećavajući rizik od razvoja problema poput visokog krvnog tlaka, srčanih bolesti, dijabetesa, depresije i anksioznosti. Učinkovite strategije za upravljanje stresom uključuju redovitu tjelesnu aktivnost, tehnike opuštanja poput dubokog disanja i meditacije, održavanje zdrave prehrane, osiguravanje dovoljno sna, izbjegavanje prekomjerne konzumacije kofeina i alkohola, povezivanje s drugima i traženje profesionalne pomoći kada je potrebno. Pronađite aktivnosti koje vam pružaju zadovoljstvo i uključite ih u svoju dnevnu rutinu kako biste smanjili razinu stresa.',
    imageUrl: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg',
    date: '2024-04-18',
    category: 'Mentalno zdravlje'
  },
  {
    id: 4,
    title: 'Smjernice za zdravu prehranu',
    slug: 'smjernice-za-zdravu-prehranu',
    excerpt: 'Pravilna prehrana ključna je za održavanje zdravlja i prevenciju bolesti. Saznajte o osnovnim principima zdrave prehrane i kako ih primijeniti u svakodnevnom životu.',
    content: 'Pravilna prehrana ključna je za održavanje zdravlja i prevenciju bolesti poput srčanih bolesti, dijabetesa tipa 2 i određenih vrsta raka. Osnovna načela zdrave prehrane uključuju konzumaciju raznolike hrane, s naglaskom na voće, povrće, cjelovite žitarice, mršave proteine i zdrave masti. Ograničite unos dodanih šećera, soli i zasićenih masti. Preporučuje se jesti najmanje 5 porcija voća i povrća dnevno, birati cjelovite žitarice umjesto rafiniranih, uključiti raznolike izvore proteina i održavati adekvatan unos vode. Također je važno obratiti pažnju na veličine porcija i slušati signale sitosti vašeg tijela.',
    imageUrl: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg',
    date: '2024-03-30',
    category: 'Prehrana'
  },
  {
    id: 5,
    title: 'Važnost kvalitetnog sna za zdravlje',
    slug: 'vaznost-kvalitetnog-sna-za-zdravlje',
    excerpt: 'Dobar san esencijalan je za optimalno funkcioniranje tijela i uma. Saznajte kako nedostatak sna utječe na zdravlje i kako poboljšati kvalitetu svog sna.',
    content: 'Dobar san esencijalan je za optimalno funkcioniranje tijela i uma. Kroničan nedostatak sna povezan je s povećanim rizikom od zdravstvenih problema poput srčanih bolesti, dijabetesa, pretilosti, oslabljenog imuniteta i mentalnih poremećaja. Većini odraslih potrebno je 7-9 sati kvalitetnog sna svake noći. Za poboljšanje kvalitete sna, pokušajte održavati konzistentan raspored spavanja, stvoriti udobno okruženje za spavanje, izbjegavati kofeinizirane napitke i elektroničke uređaje prije spavanja, biti fizički aktivni tijekom dana i prakticirati tehnike opuštanja prije spavanja. Ako imate dugotrajne probleme sa snom, razgovarajte sa svojim liječnikom.',
    imageUrl: '/images/san.jpg',
    date: '2024-03-12',
    category: 'Zdravlje'
  },
  {
    id: 6,
    title: 'Prevencija kardiovaskularnih bolesti',
    slug: 'prevencija-kardiovaskularnih-bolesti',
    excerpt: 'Kardiovaskularne bolesti vodeći su uzrok smrtnosti u svijetu. Saznajte kako smanjiti rizik od srčanih bolesti i moždanog udara kroz promjene životnog stila.',
    content: 'Kardiovaskularne bolesti vodeći su uzrok smrtnosti u svijetu, ali mnogi slučajevi mogu se spriječiti promjenama životnog stila. Ključne strategije za smanjenje rizika uključuju prestanak pušenja, održavanje zdrave tjelesne težine, redovitu tjelesnu aktivnost (najmanje 150 minuta umjerene aktivnosti tjedno), zdravu prehranu bogatu voćem, povrćem i cjelovitim žitaricama a siromašnu zasićenim mastima i solju, ograničen unos alkohola i redovite zdravstvene preglede za praćenje krvnog tlaka, kolesterola i razine šećera u krvi. Osobe s visokim rizikom trebale bi razgovarati sa svojim liječnikom o dodatnim preventivnim mjerama, uključujući potencijalnu medicinsku terapiju.',
    imageUrl: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    date: '2024-02-28',
    category: 'Kardiologija'
  }
];

// Helper function to format dates
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('bs-Latn-BA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

export default function NewsPage() {
  const featuredArticle = newsArticles[0];
  const recentArticles = newsArticles.slice(1);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Novosti i zdravstveni savjeti</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Budite u toku s najnovijim zdravstvenim informacijama, savjetima za prevenciju bolesti i smjernicama za zdrav život.
        </p>
      </div>

      {/* Featured article */}
      <div className="mb-16">
        <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src={featuredArticle.imageUrl}
                alt={featuredArticle.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-105 duration-700"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {featuredArticle.category}
                </span>
                <span className="text-sm text-muted-foreground ml-4">
                  {formatDate(featuredArticle.date)}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredArticle.title}</h2>
              <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>
              <Link href={`/novosti/${featuredArticle.slug}`}>
                <Button className="w-full sm:w-auto transition-all hover:shadow-md hover:translate-y-[-2px]">
                  Pročitajte više
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent articles */}
      <h2 className="text-2xl font-bold mb-8">Nedavne novosti</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentArticles.map((article) => (
          <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px]">
            <div className="relative h-[200px]">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-105 duration-700"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground ml-3">
                  {formatDate(article.date)}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
              <div className="flex justify-end">
                <Link href={`/novosti/${article.slug}`}>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-primary/10 transition-all">
                    Pročitajte više
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter signup */}
      <div className="mt-20 bg-primary/10 rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pretplatite se na naš newsletter</h2>
            <p className="text-muted-foreground mb-4">
              Primajte najnovije zdravstvene savjete, informacije o prevenciji bolesti i novosti o našim uslugama izravno u svoj inbox.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ime i prezime</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Vaše ime i prezime"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email adresa</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="vasa.adresa@email.com"
                />
              </div>
              <Button className="w-full transition-all hover:shadow-md hover:translate-y-[-2px]">
                Pretplatite se
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Pretplatom prihvaćate našu politiku privatnosti. Možete se odjaviti u bilo kojem trenutku.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 