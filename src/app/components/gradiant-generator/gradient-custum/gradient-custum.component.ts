import { NgClass, NgFor, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GradientGenaratorService } from '../../../services/gradient-genarator.service';
import { classResponse, color, custumColorOption, custumColorOptionResponse } from '../../../models/gradient-generatotr/gradient-setting-config';
import { toolName, toolNameResponse } from '../../../models/gradient-generatotr/gradient-header-config';

@Component({
  selector: 'app-gradient-custum',
  standalone: true,
  imports: [
    TitleCasePipe,
    NgClass,
    NgFor
  ],
  templateUrl: './gradient-custum.component.html',
  styleUrl: './gradient-custum.component.css'
})
export class GradientCustumComponent {

  constructor(private gradientGeneratorService: GradientGenaratorService){}

  colorList = this.gradientGeneratorService.getColorList();
  @Input() userEntryText!: string;

  

  setActiveCustumColorOption(value: custumColorOption): void{
    this.gradientGeneratorService.setActiveCustumColorOption(value);
  }

  isActiveCustumColorOption(value : custumColorOption): boolean {
    let activeCustumColorOption : custumColorOptionResponse  = this.gradientGeneratorService.getActiveCustumColorOption()
    return activeCustumColorOption.value == value;
  }

  viaCustumColorIsActive(): boolean{
    let viaOptionResponse = this.gradientGeneratorService.getViaOptionValue()
    return viaOptionResponse.value == 'inactive';
  }
  
  // number value are inlcude in [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
  // color value are include in this.colorList
  compareColor(
      AcutualValue:{color: string, number: number}, 
      comparetedColor: string, comparetedNumber: number
    ):boolean{
      return AcutualValue.color == comparetedColor && AcutualValue.number == comparetedNumber
    }

  isActiveColor(color: string, number: number): boolean{
    let selectedColor : color = this.gradientGeneratorService.getSelecteColor()
    return color == selectedColor.color && number == selectedColor.number;
    
  }

  setColor(color: string, number: number): void{
    this.gradientGeneratorService.setColor(
      { color: color,number: number }
    )
  }

  generateRandomColor(): void{
    this.gradientGeneratorService.generateRandomGradientColor();
  }

  getClass(): classResponse{
    let finalClass = this.gradientGeneratorService.getClass()
    return finalClass ;
  }

  isActifTool(value: toolName){
    let toolNameResponse: toolNameResponse = this.gradientGeneratorService.getTooLName()
    return toolNameResponse.value == value;
  }

  getSupClassForTextTool(): string{
    let toolName = this.gradientGeneratorService.getTooLName();
    return toolName.value =='text' ? ' bg-clip-text text-transparent' : '';
  }
  
}
