import {Component, computed, OnInit, signal, WritableSignal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MovieItemComponent} from "./components/movie-item/movie-item.component";
import {Movie} from "./util/movie.type";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  filmIds: string[] = [
    '2baf70d1-42bb-4437-b551-e5fed5a87abe',
    '12cfb892-aac0-4c5b-94af-521852e46d6a',
    '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
    'ea660b10-85c4-4ae3-8a5f-41cea3648e3e',
    '4e236f34-b981-41c3-8c65-f8c9000b94e7',
    'ebbb6b7c-945c-41ee-a792-de0e43191bd8',
    'ff24da26-a969-4f0e-ba1e-a122ead6c6e3',
    '0440483e-ca0e-4120-8c50-4c8cd9b965d6',
    '45204234-adfd-45cb-a505-a8e7a676b114',
    'dc2e6bd1-8156-4886-adff-b39e6043af0c',
    '90b72513-afd4-4570-84de-a56c312fdf81'
  ];

  title = 'NG-01-components-data-events';
  movie: WritableSignal<Movie | null> = signal(null);
  movieFetchId: WritableSignal<string> = signal(this.filmIds[0]);
  previousMovie: WritableSignal<string> = signal('');

  fullFetchUrl = computed(() => {
    return `https://ghibliapi.vercel.app/films/${this.movieFetchId()}`
  })

  ngOnInit(): void {
    this.getMovie();
  }

  onMovieChange(prevMovie: string) {
    const id = Math.floor(Math.random() * this.filmIds.length);
    this.movieFetchId.set(this.filmIds[id]);
    this.previousMovie.set(prevMovie);
    this.getMovie();
  }

  getMovie(): void {
    fetch(this.fullFetchUrl())
      .then((response: Response) => response.json())
      .then((movie) => this.movie.set(movie))
  }
}
