import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {Movie} from "../../util/movie.type";
import {MovieItemComponent} from "../movie-item/movie-item.component";

@Component({
  selector: 'movie-grid',
  standalone: true,
  imports: [MovieItemComponent],
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.scss'
})
export class MovieGridComponent implements OnInit {

    films: WritableSignal<Movie[]> = signal([]);

    ngOnInit(): void {
        fetch('https://ghibliapi.vercel.app/films/')
          .then((response) => response.json())
          .then((result) => {
            this.films.set(result);
          })
    }
}
