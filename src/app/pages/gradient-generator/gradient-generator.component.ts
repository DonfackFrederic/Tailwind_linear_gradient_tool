import { Component } from '@angular/core';
import { GradientHeaderComponent } from '../../components/gradiant-generator/gradient-header/gradient-header.component';
import { GradientCustumComponent } from '../../components/gradiant-generator/gradient-custum/gradient-custum.component';
import { GradientSettingsComponent } from '../../components/gradiant-generator/gradient-settings/gradient-settings.component';
import { GradientRandomComponent } from '../../components/gradiant-generator/gradient-random/gradient-random.component';
import { GradientReadyComponent } from '../../components/gradiant-generator/gradient-ready/gradient-ready.component';
import { FormsModule } from '@angular/forms';
import { GradientGenaratorService } from '../../services/gradient-genarator.service';
import { NgClass } from '@angular/common';
import { toolOption } from '../../models/gradient-generatotr/gradient-header-config';

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
