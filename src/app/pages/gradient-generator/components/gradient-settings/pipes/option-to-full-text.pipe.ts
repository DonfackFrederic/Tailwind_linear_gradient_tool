import { Pipe, PipeTransform } from '@angular/core';
import { direcrionOption } from '../../../models/gradient-setting-config';

@Pipe({
  name: 'optionToFullText',
  standalone: true
})
export class OptionToFullTextPipe implements PipeTransform {

  transform(directionOptionDropDown: direcrionOption): string {
    switch(directionOptionDropDown){
      case('to-b'): 
        return 'to bottom';
      case('to-bl'): 
        return 'to bottom left';
      case('to-br'):
        return 'to bottom right';
      case('to-t'):
        return 'to top';
      case('to-tl'): 
        return 'to top left';
      case('to-tr'): 
        return 'to top right';
      case('to-l'): 
        return 'to left';
      case('to-r'):
        return 'to right';
      default:
        return ''
    }
  }

}
