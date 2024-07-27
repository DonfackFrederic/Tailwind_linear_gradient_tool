import { Routes } from '@angular/router';
import { GradientGeneratorComponent } from './pages/gradient-generator/gradient-generator.component';

export const routes: Routes = [
  {path:"gradiant-generator", component:GradientGeneratorComponent},
  {path:"", redirectTo: "gradiant-generator", pathMatch:'full'}
];
