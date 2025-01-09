export interface Game {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  url: string;
  rating?: number;
  players?: string;
  releaseDate?: string;
  category?: string;
  features?: string[];
  controls?: {
    key: string;
    action: string;
  }[];
  screenshots?: string[];
} 