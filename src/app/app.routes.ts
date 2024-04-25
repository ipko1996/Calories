import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/pages/home.routes').then(m => m.HomeRoutes),
  },
];
