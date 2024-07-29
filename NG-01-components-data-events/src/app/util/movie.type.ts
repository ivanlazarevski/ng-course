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
}

export type Person = {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  films: Movie[];
  url: string;
}

export type Species = {
  id: string;
  name: string;
  classification: string;
  eye_colors: string;
  hair_colors: string;
  people: Person[];
  films: Movie[];
}

export type Location = {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  residents: Person[];
  films: Movie[];
  url: string;
}

export type Vehicle = {
  id: string;
  name: string;
  description: string;
  vehicle_class: string;
  length: string;
  pilot: Person[];
  films: Movie[];
  url: string;
}
