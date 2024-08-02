import { Injectable } from '@angular/core';
import {Movie} from "../util/movie.type";

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {

  constructor() { }

  async getMovies(): Promise<Movie[]> {
    let response = await fetch('https://ghibliapi.vercel.app/films/');
    return await response.json();
  }
}
