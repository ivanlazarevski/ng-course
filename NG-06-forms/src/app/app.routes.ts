import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'movies',
    loadComponent: () => import('./components/movie-grid/movie-grid.component').then(m => m.MovieGridComponent),
  }, {
    path: '',
    loadComponent: () => import('./components/home-page/home-page.component').then(m => m.HomePageComponent),
  }, {
    path: 'register',
    loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent),
  },
];
