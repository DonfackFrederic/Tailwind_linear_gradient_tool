import { NgClass, TitleCasePipe } from '@angular/common';
import {Component, ViewChildren, ElementRef, QueryList, inject} from '@angular/core';
import { OptionToFullTextPipe } from './pipes/option-to-full-text.pipe';
import { viaOptionResponse, directionOptionResponse, viaOption, direcrionOption } from '../../models/gradient-setting-config';
import { GradientGenaratorService } from '../../services/gradient-genarator.service';

@Component({
  selector: 'app-gradient-settings',
  standalone: true,
  imports: [
    TitleCasePipe,
    NgClass,
    OptionToFullTextPipe
  ],
  templateUrl: './gradient-settings.component.html',
  styleUrl: './gradient-settings.component.css'
})

export class GradientSettingsComponent{

  constructor (private gradientGeneratorService : GradientGenaratorService){}

  @ViewChildren('viaOptionDropDown , directionOptionDropDown') dropdownOptionList : QueryList<ElementRef>;

  getViaOptionResponse(): viaOptionResponse{
    return this.gradientGeneratorService.getViaOptionValue();
  }
  getDirectionResponse(): directionOptionResponse{
    return this.gradientGeneratorService.getDirectionOptionValue();
  }
  // toggle dropdown viaOptionDropdown and directionOptionDropdown
  // Angular is riding template by up to down, ViaOption is comming first in DOM and
  // in that case directionOptionMenu is the second

  ToggleSpecificDropdown(position: 0|1): void{
    this.dropdownOptionList.get(position)?.nativeElement.classList.toggle('hidden')
  }

  setViaOptionValue(value: viaOption){
    this.gradientGeneratorService.setViaOptionValue(value);
    this.ToggleSpecificDropdown(0);
  }
  setDirectionOptionValue(value: direcrionOption){
    this.gradientGeneratorService.setDirectionOptionValue(value);
    this.ToggleSpecificDropdown(1);
  }

  isActiveViaOption(value: viaOption): boolean{
    let viaOptionResponse : viaOptionResponse = this.gradientGeneratorService.getViaOptionValue()
    return viaOptionResponse.value == value;
  }

  isActiveDirection(value: direcrionOption): boolean{
    let directionOptionResponse : directionOptionResponse = this.gradientGeneratorService.getDirectionOptionValue()
    return directionOptionResponse.value == value;
  }

}
