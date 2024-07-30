import { Movie } from './movie.type';
import { Person } from './person.type';

export type Location = {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  residents: Person[];
  films: Movie[];
  url: string;
};
