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

export default function CardiovascularPreventionArticlePage() {
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
    const encodedTitle = encodeURIComponent('Prevencija kardiovaskularnih bolesti');
    
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
          src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"
          alt="Kardiovaskularno zdravlje"
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
              {formatDate('2023-05-15')}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Prevencija kardiovaskularnih bolesti
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Kardiovaskularne bolesti su vodeći uzrok smrtnosti u svijetu. Saznajte kako možete smanjiti rizik i zaštititi svoje srce.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Faktori rizika</h2>
                  <p className="text-muted-foreground">
                    Prepoznavanje i upravljanje faktorima rizika ključno je u prevenciji kardiovaskularnih bolesti.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Modificirajući faktori</h3>
                  <p className="text-muted-foreground">Faktori koje možemo kontrolirati kroz promjene životnog stila i liječenje.</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Nemodificirajući faktori</h3>
                  <p className="text-muted-foreground">Faktori koje ne možemo promijeniti, ali možemo uzeti u obzir u prevenciji.</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Fizička aktivnost</h3>
                  <p className="text-muted-foreground">Redovita tjelovježba jača srce i krvne žile, te smanjuje rizik od bolesti.</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Prehrana</h3>
                  <p className="text-muted-foreground">Zdrava prehrana bogata voćem, povrćem i omega-3 masnim kiselinama.</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Preventivne mjere</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Redovito mjerenje krvnog tlaka</li>
                  <li>Kontrola razine kolesterola</li>
                  <li>Održavanje zdrave težine</li>
                  <li>Prestanak pušenja</li>
                  <li>Ograničenje konzumacije alkohola</li>
                  <li>Upravljanje stresom</li>
                  <li>Redoviti preventivni pregledi</li>
                  <li>Dovoljan san i odmor</li>
                </ul>

                <h3 className="text-2xl font-bold">Znakovi upozorenja</h3>
                <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                  <li>Bol u prsima ili nelagoda</li>
                  <li>Otežano disanje</li>
                  <li>Umor i slabost</li>
                  <li>Neredoviti rad srca</li>
                  <li>Otečene noge</li>
                  <li>Vrtoglavica i nesvjestica</li>
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
                title="Podijeli na Viber"
              >
                <svg xmlns="/icons/viber.svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.287.129.332.202.045.073.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 19.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                </svg>
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
        <h2 className="text-2xl font-bold mb-4">Želite li smanjiti rizik od kardiovaskularnih bolesti?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Naši stručnjaci mogu vam pomoći razviti personalizirani plan prevencije i pratiti vaše zdravstveno stanje.
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