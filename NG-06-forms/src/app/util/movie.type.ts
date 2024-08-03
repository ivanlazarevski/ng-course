import { Person } from './person.type';
import { Species } from './species.type';
import { Location } from './location.type';
import { Vehicle } from './vehicle.type';

export type Movie = {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: Person[];
  species: Species[];
  locations: Location[];
  vehicles: Vehicle[];
  url: string;
};
