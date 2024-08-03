import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'movie-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './movie-header.component.html',
  styleUrl: './movie-header.component.scss'
})
export class MovieHeaderComponent {

}
