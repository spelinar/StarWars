export interface people {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string

}

export interface filmJedi {
  characters?: string[];
  created?: string;
  edited?: string;
  episode_id?: number;
  opening_crawl?: string;
  planets?: string[];
  producer?: string;
  rease_date?: string;
  species?: string[];
  starships?: string[];
  title?: string;
  url?: string;
  vehicles?: string[];
}

export interface PeopleState {
  [key: string]: people
}
