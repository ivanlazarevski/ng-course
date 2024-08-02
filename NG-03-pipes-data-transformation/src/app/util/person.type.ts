import { Movie } from './movie.type';

export type Person = {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  films: Movie[];
  url: string;
};
