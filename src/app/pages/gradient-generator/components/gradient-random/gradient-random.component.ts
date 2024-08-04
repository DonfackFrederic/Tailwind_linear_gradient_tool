import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { toolName, toolNameResponse } from '../../models/gradient-header-config';
import { color } from '../../models/gradient-setting-config';
import { GradientGenaratorService } from '../../services/gradient-genarator.service';


type gradientColor = {finalClass: string};


@Component({
  selector: 'app-gradient-random',
  standalone: true,
  imports: [NgClass],
  templateUrl: './gradient-random.component.html',
  styleUrl: './gradient-random.component.css'
})

export class GradientRandomComponent {

  constructor(private gradientGeneratorService: GradientGenaratorService){}

  colorList : string[] = this.gradientGeneratorService.getColorList();
  generatedColorList: gradientColor[] = [];
  TextForCopyButtun : string = 'Copy';

  private generateRandomColor(): string{
    let colorList: string[] = this.colorList
    let colorIndex = Math.floor(Math.random() * 22);
    return colorList[colorIndex]
  }

  private generateRandomShade(): number{
    let numberArray:number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    let numberIndex = Math.floor(Math.random() * 10);
    return numberArray[numberIndex]
  }

  private generateRandomFromColor(): color{
    let color: string = this.generateRandomColor()
    let number: number = this.generateRandomShade()
    return { color: color, number: number};
  }

  private generateRandomToColor(): color{
    let color: string = this.generateRandomColor()
    let number: number = this.generateRandomShade()
    return { color: color, number: number};
  }
  generateClass(fromColor: color, toColor: color ): void{
    let directionClass = `bg-gradient-to-r`;
    let fromClass = `from-${fromColor.color}-${fromColor.number}`;
    let toClass = `to-${toColor.color}-${toColor.number}`;
    let finalClass = `${directionClass} ${fromClass} ${toClass}`;
    this.generatedColorList.push({finalClass : finalClass});
    
  }
  generateRandomGradientColor(){
    this.generatedColorList = [];
    for(let i = 0;  i<=20;  i++){
      let fromColor = this.generateRandomFromColor();
      let toColor = this.generateRandomToColor();
      this.generateClass(fromColor, toColor); 
    }
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
