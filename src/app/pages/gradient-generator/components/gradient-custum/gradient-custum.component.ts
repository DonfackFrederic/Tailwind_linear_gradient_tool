import { NgClass, NgFor, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { toolName, toolNameResponse } from '../../models/gradient-header-config';
import { custumColorOption, custumColorOptionResponse, classResponse, color } from '../../models/gradient-setting-config';
import { GradientGenaratorService } from '../../services/gradient-genarator.service';


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
  TextForCopyButtun : string = 'Copy';

  

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

  copieClass(texteACopier: string) {

    const element = document.createElement('textarea');
    element.value = texteACopier;

    document.body.appendChild(element);

    element.select();
    document.execCommand('copy');

    document.body.removeChild(element);
    this.TextForCopyButtun = 'Copied';
    setTimeout(() => {
      this.TextForCopyButtun = 'Copy'
    }, 1000);
  }

  getSupClassForTextTool(): string{
    let supClass = this.isActifTool('text') ? ' bg-clip-text text-transparent' : '';
    return supClass;
  }
  
}
