import { Routes } from '@angular/router';
import { GradientGeneratorComponent } from './pages/gradient-generator/gradient-generator.component';

export const routes: Routes = [
  { path: '', redirectTo: 'gradient-generator', pathMatch: 'full' },
  {
    path: 'gradient-generator',
    component: GradientGeneratorComponent
  },
  {
    path: '**',
    redirectTo: 'gradient-generator'
  }
];
