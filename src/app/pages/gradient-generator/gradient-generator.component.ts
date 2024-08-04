import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GradientSettingsComponent } from './components/gradient-settings/gradient-settings.component';
import { NgClass } from '@angular/common';
import { GradientCustumComponent } from './components/gradient-custum/gradient-custum.component';
import { GradientHeaderComponent } from './components/gradient-header/gradient-header.component';
import { GradientRandomComponent } from './components/gradient-random/gradient-random.component';
import { GradientReadyComponent } from './components/gradient-ready/gradient-ready.component';
import { toolOption } from './models/gradient-header-config';
import { GradientGenaratorService } from './services/gradient-genarator.service';

@Component({
  selector: 'app-gradient-generator',
  standalone: true,
  imports: [
    GradientHeaderComponent,
    GradientSettingsComponent,
    GradientRandomComponent,
    GradientCustumComponent,
    GradientReadyComponent,
    FormsModule,
    NgClass
  ],
  templateUrl: './gradient-generator.component.html',
  styleUrl: './gradient-generator.component.css'
})
export class GradientGeneratorComponent {
  constructor(private gradientGeneratorService: GradientGenaratorService){}

  UserEntryText : string = "Awesome Gradient";

  isTextToolActive(){
    let activeTool = this.gradientGeneratorService.getTooLName()
    return activeTool.value == 'text';
  }

  isActiveToolOption(option: toolOption){
    let toolOption = this.gradientGeneratorService.getTooLOption();
    return toolOption.value == option;
  }
}
