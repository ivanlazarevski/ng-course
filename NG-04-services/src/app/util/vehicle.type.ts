import { Movie } from "./movie.type";
import { Person } from "./person.type";

export type Vehicle = {
  id: string;
  name: string;
  description: string;
  vehicle_class: string;
  length: string;
  pilot: Person[];
  films: Movie[];
  url: string;
};
