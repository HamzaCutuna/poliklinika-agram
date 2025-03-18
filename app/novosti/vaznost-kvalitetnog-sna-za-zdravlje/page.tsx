'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

// Helper function to format dates
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    'januar', 'februar', 'mart', 'april', 'maj', 'juni',
    'juli', 'august', 'septembar', 'oktobar', 'novembar', 'decembar'
  ];
  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}.`;
}

export default function QualitySleepArticlePage() {
  const [copySuccess, setCopySuccess] = useState(false);
  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(articleUrl);
    const encodedTitle = encodeURIComponent('Važnost kvalitetnog sna za zdravlje');
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, '_blank');
        break;
      case 'viber':
        window.open(`viber://forward?text=${encodedTitle}%20${encodedUrl}`, '_blank');
        break;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero section */}
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
        <Image
          src="/images/san.jpg"
          alt="Kvalitetan san"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-75 transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-white bg-primary/80 px-4 py-1.5 rounded-full">
              Zdravlje
            </span>
            <span className="text-sm text-white/90">
              {formatDate('2023-03-12')}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Važnost kvalitetnog sna za zdravlje
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Kvalitetan san je ključan za održavanje dobrog zdravlja i dobrobiti. Otkrijte kako možete poboljšati kvalitetu svog sna.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Article content */}
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Utjecaj sna na zdravlje</h2>
                  <p className="text-muted-foreground">
                    Kvalitetan san je neophodan za regeneraciju tijela i uma, te ima značajan utjecaj na opće zdravstveno stanje.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Fizičko zdravlje</h3>
                  <p className="text-muted-foreground">San pomaže u regeneraciji tkiva, jačanju imunološkog sustava i održavanju zdrave težine.</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Mentalno zdravlje</h3>
                  <p className="text-muted-foreground">Kvalitetan san poboljšava pamćenje, koncentraciju i emocionalnu stabilnost.</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Kardiovaskularno zdravlje</h3>
                  <p className="text-muted-foreground">Dovoljan san smanjuje rizik od srčanih bolesti i pomaže u regulaciji krvnog tlaka.</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Metaboličko zdravlje</h3>
                  <p className="text-muted-foreground">San utječe na regulaciju hormona koji kontroliraju apetit i metabolizam.</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Savjeti za kvalitetan san</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Održavajte redoviti raspored spavanja</li>
                  <li>Stvorite opuštajuću rutinu prije spavanja</li>
                  <li>Održavajte optimalnu temperaturu u spavaćoj sobi</li>
                  <li>Izbjegavajte kofein i alkohol prije spavanja</li>
                  <li>Redovito vježbajte, ali ne prije spavanja</li>
                  <li>Ograničite korištenje elektroničkih uređaja</li>
                  <li>Osigurajte dovoljno tame i tišine</li>
                  <li>Koristite udobnu posteljinu</li>
                </ul>

                <h3 className="text-2xl font-bold">Znakovi lošeg sna</h3>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li>Umor i pospanost tijekom dana</li>
                  <li>Poteškoće s koncentracijom</li>
                  <li>Promjene raspoloženja</li>
                  <li>Povećan apetit i težina</li>
                  <li>Slabiji imunološki sustav</li>
                  <li>Povećan rizik od bolesti</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Saznajte više</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/usluge/sistematski-pregled" className="text-primary hover:text-primary/80 font-medium flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Sistematski pregled
                </Link>
              </li>
              <li>
                <Link href="/usluge/kardiologija" className="text-primary hover:text-primary/80 font-medium flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Kardiologija
                </Link>
              </li>
              <li>
                <Link href="/usluge/radiologija" className="text-primary hover:text-primary/80 font-medium flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Radiologija
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Posljednje novosti</h3>
            <div className="space-y-4">
            <Link href="/novosti/vaznost-redovitih-preventivnih-pregleda" className="block group">
                <div className="flex items-start">
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden mr-4 flex-shrink-0">
                    <Image 
                      src="/images/novost1.jpg"
                      alt="Redoviti preventivni pregledi"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-primary transition-colors">Važnost redovitih preventivnih pregleda</h4>
                    <p className="text-xs text-muted-foreground mt-1">{formatDate('2024-06-15')}</p>
                  </div>
                </div>
              </Link>

              <Link href="/novosti/kako-prepoznati-simptome-mozdanog-udara" className="block group">
                <div className="flex items-start">
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden mr-4 flex-shrink-0">
                    <Image 
                      src="/images/mozdani.jpg"
                      alt="Moždani udar"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-primary transition-colors">Kako prepoznati simptome moždanog udara</h4>
                    <p className="text-xs text-muted-foreground mt-1">{formatDate('2024-05-22')}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Share section moved to sidebar */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Podijelite članak</h3>
            <div className="flex justify-left gap-5">
              <button
                onClick={() => handleShare('facebook')}
                className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                title="Podijeli na Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare('whatsapp')}
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                title="Podijeli na WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare('viber')}
                className="w-10 h-10 rounded-full bg-[#7360F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                title="Podijeli na Viber">
                <img src="/icons/viber.svg" alt="Viber" className="h-5 w-5" />
              </button>
              <button
                onClick={handleCopyLink}
                className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                title="Kopiraj link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </button>
            </div>
            {copySuccess && (
              <p className="text-sm text-center text-primary mt-2">Link kopiran u međuspremnik!</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-16 bg-primary/10 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Imate problema sa snom?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Naši stručnjaci mogu vam pomoći identificirati uzroke problema sa snom i razviti personalizirani plan za poboljšanje kvalitete sna.
        </p>
        <Link href="/kontakt">
          <Button className="px-8 transition-all hover:shadow-md hover:translate-y-[-2px]">
            Kontaktirajte nas
          </Button>
        </Link>
      </div>
    </div>
  );
} 