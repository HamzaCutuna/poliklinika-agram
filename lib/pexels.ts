import { createClient, Photo } from 'pexels';

// Check if API key is defined
const apiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY;
if (!apiKey) {
  console.warn('Pexels API key is not defined. Please add it to your .env.local file.');
}

// Initialize the Pexels client
const client = createClient(apiKey || '');

export type PexelsPhoto = Photo;

export async function searchMedicalPhotos(query: string = 'medical', perPage: number = 10, page: number = 1) {
  try {
    const response = await client.photos.search({
      query,
      per_page: perPage,
      page: page
    });
    
    if ('photos' in response) {
      return response.photos as PexelsPhoto[];
    }
    return [];
  } catch (error) {
    console.error('Error fetching photos from Pexels:', error);
    return [];
  }
}

// Function to get curated medical photos
export async function getCuratedMedicalPhotos(perPage: number = 10, page: number = 1) {
  try {
    const response = await client.photos.curated({
      per_page: perPage,
      page: page
    });
    
    if ('photos' in response) {
      // Filter for images that might be relevant to healthcare
      const medicalKeywords = ['health', 'care', 'doctor', 'medical', 'hospital', 'clinic'];
      const filtered = response.photos.filter((photo: Photo) => 
        medicalKeywords.some(keyword => 
          photo.alt?.toLowerCase().includes(keyword) || 
          photo.url?.toLowerCase().includes(keyword)
        )
      );
      
      return (filtered.length > 0 ? filtered : response.photos) as PexelsPhoto[];
    }
    return [];
  } catch (error) {
    console.error('Error fetching curated photos from Pexels:', error);
    return [];
  }
} 