import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'gradient-generator', pathMatch: 'full' },
  {
    path: 'gradient-generator',
    loadComponent: () =>
      import('./pages/gradient-generator/gradient-generator.component').then(
        (c) => c.GradientGeneratorComponent
      ),
  },
];
