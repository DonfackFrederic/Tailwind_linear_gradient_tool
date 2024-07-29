import { NgClass, TitleCasePipe } from '@angular/common';
import {Component, ViewChildren, ElementRef, QueryList, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { GradientSettingConfig } from '../../../models/gradient-generatotr/gradient-setting-config';

@Component({
  selector: 'app-gradient-settings',
  standalone: true,
  imports: [
    TitleCasePipe,
    NgClass
  ],
  templateUrl: './gradient-settings.component.html',
  styleUrl: './gradient-settings.component.css'
})
export class GradientSettingsComponent implements OnInit { 

  @Input() gradientSettingConfig:GradientSettingConfig
  @Output() gradientSettingConfigEmitter: EventEmitter<GradientSettingConfig> = new EventEmitter()
  @ViewChildren('viaOptionDropDown , directionOptionDropDown') dropdownOptionList : QueryList<ElementRef>;

  ngOnInit(): void {
    this.gradientSettingConfigEmitter.emit(this.gradientSettingConfig)
  }

  // toggle dropdown viaOptionDropdown and directionOptionDropdown
  // Angular is riding template by up to down, ViaOption is comming first n DOM and
  // 
  // in that case directionOptionMenu is the second

  ToggleSpecificDropdown(position: 0|1): void{
    this.dropdownOptionList.get(position)?.nativeElement.classList.toggle('hidden')
  }

  setViaOptionValue(value: string){
    this.gradientSettingConfig.viaOptionValue = value;
    this.gradientSettingConfigEmitter.emit(this.gradientSettingConfig)
    this.ToggleSpecificDropdown(0);
  }
  setDirectionOptionValue(value: string){
    this.gradientSettingConfig.directionOptionValue = value;
    this.gradientSettingConfigEmitter.emit(this.gradientSettingConfig)
    this.ToggleSpecificDropdown(1);
  }

  isActiveViaOption(value: string): boolean{
    return this.gradientSettingConfig.viaOptionValue == value;
  }

  isActiveDirection(value: string): boolean{
    return this.gradientSettingConfig.directionOptionValue == value;
  }

}
