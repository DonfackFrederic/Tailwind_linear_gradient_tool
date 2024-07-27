import { Component } from '@angular/core';
import { GradientHeaderComponent } from '../../components/gradiant-generator/gradient-header/gradient-header.component';
import { GradientCustumComponent } from '../../components/gradiant-generator/gradient-custum/gradient-custum.component';
import { GradientSettingsComponent } from '../../components/gradiant-generator/gradient-settings/gradient-settings.component';
import { GradientRandomComponent } from '../../components/gradiant-generator/gradient-random/gradient-random.component';
import { GradientReadyComponent } from '../../components/gradiant-generator/gradient-ready/gradient-ready.component';
import { GradientHeaderConfig } from '../../models/gradient-generatotr/gradient-header-config';

@Component({
  selector: 'app-gradient-generator',
  standalone: true,
  imports: [
    GradientHeaderComponent,
    GradientSettingsComponent,
    GradientRandomComponent,
    GradientCustumComponent,
    GradientReadyComponent
  ],
  templateUrl: './gradient-generator.component.html',
  styleUrl: './gradient-generator.component.css'
})
export class GradientGeneratorComponent {
  GradientHeaderConfig! : GradientHeaderConfig;
  
  SetGradientHeaderConfig(config: GradientHeaderConfig){
    this.GradientHeaderConfig = config
    console.log(this.GradientHeaderConfig)
  }
}
