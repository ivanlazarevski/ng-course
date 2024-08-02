import { Movie } from './movie.type';
import { Person } from './person.type';

export type Species = {
  id: string;
  name: string;
  classification: string;
  eye_colors: string;
  hair_colors: string;
  people: Person[];
  films: Movie[];
};
