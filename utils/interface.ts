export interface movieI{
  adult: boolean;
  background_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  backdrop_path?: string;
  tagline?: string;
  runtime?: number;
  genres?: [{
    id: number,
    name:string
  }]
}