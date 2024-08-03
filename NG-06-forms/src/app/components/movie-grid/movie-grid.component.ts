import {
  Component, inject,
  OnInit,
  signal,
  WritableSignal
} from '@angular/core';
import {Movie} from "../../util/movie.type";
import {MovieItemComponent} from "../movie-item/movie-item.component";
import {GetMoviesService} from "../../services/get-movies.service";

@Component({
  selector: 'movie-grid',
  standalone: true,
  imports: [MovieItemComponent],
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.scss'
})
export class MovieGridComponent implements OnInit {
  private getMoviesService = inject(GetMoviesService);

  films: WritableSignal<Movie[]> = signal([]);

  ngOnInit(): void {
    this.getMoviesService.getMovies()
      .then((result) => {
        this.films.set(result);
      })
  }

  onDeleteFilm(filmId: string) {
    const filtered = this.films().filter((film) => film.id !== filmId);
    this.films.set(filtered);
  }
}
