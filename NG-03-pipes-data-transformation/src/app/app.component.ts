import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MovieGridComponent} from "./components/movie-grid/movie-grid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NG-03-pipes-data-transformation';
}
