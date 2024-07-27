import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GradientHeaderConfig } from '../../../models/gradient-generatotr/gradient-header-config';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-gradient-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './gradient-header.component.html',
  styleUrl: './gradient-header.component.css'
})
export class GradientHeaderComponent implements OnInit {

  gradientHeaderConfig = new GradientHeaderConfig('bg','custum');
  @Output() gradientHeaderConfigEmitter : EventEmitter<GradientHeaderConfig> = new EventEmitter()


  ngOnInit(): void {
    this.gradientHeaderConfigEmitter.emit(this.gradientHeaderConfig)
  }
  setToolName(toolName:'bg'|'text') {
    this.gradientHeaderConfig.toolName = toolName;
    this.gradientHeaderConfigEmitter.emit(this.gradientHeaderConfig)
  }
  setToolOption(toolOption:'custum'|'random'|'ready') {
    this.gradientHeaderConfig.toolOption = toolOption;
    this.gradientHeaderConfigEmitter.emit(this.gradientHeaderConfig)
  }

  getActifTool(value: 'bg'|'text'){
    return this.gradientHeaderConfig.toolName == value;
  }

  getActifOption(value:'custum'|'random'|'ready'){
    return this.gradientHeaderConfig.toolOption == value;
  }

}
