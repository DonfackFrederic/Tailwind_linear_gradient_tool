import { Component } from '@angular/core';
import { readyColor, readyColorList } from './mock/ready-color.mock';
import { NgClass } from '@angular/common';
import { toolName, toolNameResponse } from '../../models/gradient-header-config';
import { GradientGenaratorService } from '../../services/gradient-genarator.service';

@Component({
  selector: 'app-gradient-ready',
  standalone: true,
  imports: [NgClass],
  templateUrl: './gradient-ready.component.html',
  styleUrl: './gradient-ready.component.css'
})
export class GradientReadyComponent {

  constructor(private gradientGeneratorService: GradientGenaratorService){}

  readyColorList : readyColor[] = readyColorList;

  TextForCopyButtun : string = 'Copy';
  
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
