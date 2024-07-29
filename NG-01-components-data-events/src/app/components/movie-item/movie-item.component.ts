import {Component, input} from '@angular/core';
import {Movie} from "../../util/movie.type";

@Component({
  selector: 'movie-item',
  standalone: true,
  imports: [],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.scss'
})
export class MovieItemComponent {
  movie = input<Movie>();
}
