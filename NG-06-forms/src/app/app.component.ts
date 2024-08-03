import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MovieHeaderComponent} from "./components/movie-header/movie-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NG-06-forms';
}
