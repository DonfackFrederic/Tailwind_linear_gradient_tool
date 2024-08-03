import { Component} from '@angular/core';
import { toolName, toolNameResponse, toolOption, toolOptionResponse } from '../../../models/gradient-generatotr/gradient-header-config';
import { NgClass } from '@angular/common';
import { GradientGenaratorService } from '../../../services/gradient-genarator.service';

@Component({
  selector: 'app-gradient-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './gradient-header.component.html',
  styleUrl: './gradient-header.component.css'
})
export class GradientHeaderComponent{

  constructor(private gradientGeneratorService: GradientGenaratorService){}

  setToolName(toolName:  toolName) {
    this.gradientGeneratorService.setToolName(toolName);
  }
  setToolOption(toolOption: toolOption) {
    this.gradientGeneratorService.setToolOption(toolOption);
  }

  isActifTool(value: toolName){
    let toolNameResponse: toolNameResponse = this.gradientGeneratorService.getTooLName()
    return toolNameResponse.value == value;
  }

  isActifOption(value: toolOption): boolean{
    let toolOptionResponse : toolOptionResponse = this.gradientGeneratorService.getTooLOption()
    return toolOptionResponse.value == value;
  }

}
