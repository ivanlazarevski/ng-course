import {Component, input, OnDestroy, OnInit, output, signal} from '@angular/core';
import {Movie} from "../../util/movie.type";
import {CurrencyPipe, DatePipe, NgClass, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'movie-item',
  standalone: true,
  imports: [
    NgClass,
    DatePipe,
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent implements OnDestroy, OnInit
{
  movie = input<Movie>();
  deleteItem = output<string>();
  movieScore = signal<number>(0);
  ticketPrice = signal<number>(0);

  ngOnInit(): void {
    this.movieScore.set(Number(this.movie()?.rt_score));
    this.ticketPrice.set(Math.floor(Math.random() * 50));
    console.log(this.movie());
  }

  deleteFilm(filmId: string | undefined): void {
    if(filmId) {
      this.deleteItem.emit(filmId);
    }
  }

  ngOnDestroy(): void {
    console.log(this.movie()?.title, 'destroyed');
  }
}
