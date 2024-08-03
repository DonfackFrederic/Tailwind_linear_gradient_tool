import { Injectable } from '@angular/core';
import { GradientHeaderConfig, toolName, toolNameResponse, toolOption, toolOptionResponse } from '../models/gradient-generatotr/gradient-header-config';
import { GradientSettingConfig, classResponse, color, custumColorOption, custumColorOptionResponse, direcrionOption, directionOptionResponse, selectedColorPalette, viaOption, viaOptionResponse } from '../models/gradient-generatotr/gradient-setting-config';

@Injectable({
  providedIn: 'root'
})
export class GradientGenaratorService {

  constructor() { }

  private gradientHeaderConfig = new GradientHeaderConfig('bg','custum');
  private gradientSettingConfig  = new GradientSettingConfig('inactive', 'to-r', 'from');
  

  private colorList: string[] = this.gradientSettingConfig.getColorList();

  private finalClass : classResponse = this.gradientSettingConfig.getClass();

  // use in GradientHeaderComponent 
  setToolName(toolName: toolName) : void{
    this.gradientHeaderConfig.setToolName(toolName);
  }
  getTooLName(): toolNameResponse{
    return this.gradientHeaderConfig.getToolName()
  }

  setToolOption(toolOption: toolOption) : void {
    this.gradientHeaderConfig.setToolOption(toolOption);
  }
  getTooLOption(): toolOptionResponse{
    return this.gradientHeaderConfig.getTooLOption()
  }


  // Use in gradientSettingComponent
  setViaOptionValue(value: viaOption): void{
    this.gradientSettingConfig.setViaOptionValue(value);
  }
  getViaOptionValue(): viaOptionResponse{
    return this.gradientSettingConfig.getViaOptionValue()
  }

  setDirectionOptionValue(value: direcrionOption): void{
    this.gradientSettingConfig.setDirectionOptionValue(value);
  }
  getDirectionOptionValue(): directionOptionResponse{
    return this.gradientSettingConfig.getDirectionOptionValue()
  }

  setActiveCustumColorOption(value: custumColorOption): void{
    this.gradientSettingConfig.setActiveCustumColorOption(value);
  }


  // use in gradientCustumComponent
  getActiveCustumColorOption(): custumColorOptionResponse{
    return this.gradientSettingConfig.getActiveCustumColorOption() ;
  }

  getSelecteColor(): color{
    return this.gradientSettingConfig.getActiveColor();
  }

  getClass(): classResponse{
    return this.finalClass;
  }

  getColorList(): string[] {
    return this.colorList;
  }

  setColor( color: color): void{
    this.gradientSettingConfig.setActiveColor(color)
  }

  generateRandomGradientColor(): void{
    this.gradientSettingConfig.generateRandomGradientColor();
  }

}
