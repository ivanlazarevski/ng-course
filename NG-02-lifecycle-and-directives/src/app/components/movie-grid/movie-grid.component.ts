import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
  WritableSignal
} from '@angular/core';
import {Movie} from "../../util/movie.type";
import {MovieItemComponent} from "../movie-item/movie-item.component";

@Component({
  selector: 'movie-grid',
  standalone: true,
  imports: [MovieItemComponent],
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.scss'
})
export class MovieGridComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
    films: WritableSignal<Movie[]> = signal([]);

  /**
   * Called once, after all properties and inputs are initialized
   * One of the 2-3 most important lifecycle methods
   * IMPORTANT!!
   */
  ngOnInit(): void {
        fetch('https://ghibliapi.vercel.app/films/')
          .then((response) => response.json())
          .then((result) => {
            this.films.set(result);
          })
    }

  /**
   * Called once before ngOnInit()
   * Also gets called whenever an input of a component changes
   * IMPORTANT!!
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes')
  }

  /**
   * Is called after Angular projects external content in the component view.
   */
  ngAfterContentInit(): void {
    console.log('After content init');
  }

  /**
   * Called after ngAfterContentInit(), when Angular checks the content projected
   * into the component view
   */
  ngAfterContentChecked(): void {
    console.log('After content checked');
  }

  /**
   * Is called after Angular initialized the component's views and the child views
   */
  ngAfterViewInit(): void {
    console.log('After view init')
  }

  /**
   * Is called after angular checks the component's views and child views
   */
  ngAfterViewChecked(): void {
    console.log('After view checked');
  }

  /**
   * Cleanup method before Angular destroys the component
   */
  ngOnDestroy(): void {
    console.log('After view destroy');
  }

  onDeleteFilm(filmId: string) {
    const filtered = this.films().filter((film) => film.id !== filmId);
    this.films.set(filtered);
  }
}
