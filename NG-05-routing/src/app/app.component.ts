import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MovieGridComponent} from "./components/movie-grid/movie-grid.component";
import {MovieHeaderComponent} from "./components/movie-header/movie-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieGridComponent, MovieHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NG-05-routing';
}
