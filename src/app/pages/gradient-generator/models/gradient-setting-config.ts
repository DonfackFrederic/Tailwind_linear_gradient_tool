export type viaOption = 'active' | 'inactive';
export type direcrionOption = 'to-t' | 'to-tr' | 'to-r' | 'to-br' | 'to-b' | 'to-bl' | 'to-bl' | 'to-l' | 'to-tl'; 
export type custumColorOption = 'from' | 'via' | 'to';

// this types are for gradienGeneratorService function who will return a response to component 
// that response is used by component  
// because service don't update string valeur only object value
export type viaOptionResponse = { value : viaOption};
export type directionOptionResponse = { value: direcrionOption };
export type custumColorOptionResponse = { value: custumColorOption };
export type color = {color: string, number: number};
export type selectedColorPalette = {from: color, via: color, to: color};
export type classResponse = {value: string};

export class GradientSettingConfig{

  constructor(
    private viaOptionValue: viaOption, 
    private directionOptionValue: direcrionOption,
    private activeCustumColorOption : custumColorOption
  ){
    this.generateClass()
  }

  private colorList: string[] = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose'
  ]

  private selectedColorPalette : selectedColorPalette = {
    from: {color: "teal", number: 200},
    via: {color: "teal", number: 500},
    to: {color: "teal", number: 500}
  }
  private finalClass: classResponse = {value: ''};


  getColorList(): string[] {
    return this.colorList;
  }

  setViaOptionValue(value: viaOption): void{
    this.viaOptionValue = value;
    this.generateClass();
  }
  getViaOptionValue(): viaOptionResponse{
    return { value : this.viaOptionValue };
  }

  setDirectionOptionValue(value: direcrionOption): void{
    this.directionOptionValue = value;
    this.generateClass()
  }
  getDirectionOptionValue(): directionOptionResponse{
    return { value : this.directionOptionValue };
  }
  
  setActiveCustumColorOption(value: custumColorOption): void{
    this.activeCustumColorOption = value;
    this.generateClass()
  }
  getActiveCustumColorOption(): custumColorOptionResponse{
    return { value : this.activeCustumColorOption };
  }

  setActiveColor(color: color): void{
    this.selectedColorPalette[this.activeCustumColorOption] = color;
    this.generateClass()
  }
  getActiveColor():color{
    return this.selectedColorPalette[this.activeCustumColorOption];
  }

  private generateRandomColor(){
    let colorList: string[] = this.colorList
    let colorIndex = Math.floor(Math.random() * 22);
    return colorList[colorIndex]
  }

  private generateRandomShade(){
    let numberArray:number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    let numberIndex = Math.floor(Math.random() * 10);
    return numberArray[numberIndex]
  }

  private generateRandomFromColor(){
    let color: string = this.generateRandomColor()
    let number: number = this.generateRandomShade()
    this.selectedColorPalette.from = { color: color, number: number};
  }

  private generateRandomViaColor(){
    let color: string = this.generateRandomColor()
    let number: number = this.generateRandomShade()
    this.selectedColorPalette.via = { color: color, number: number};
  }

  private generateRandomToColor(){
    let color: string = this.generateRandomColor()
    let number: number = this.generateRandomShade()
    this.selectedColorPalette.to = { color: color, number: number};
  }

  generateRandomGradientColor(){
    this.generateRandomFromColor()
    let viaOptionResponse = this.getViaOptionValue()
    if(viaOptionResponse.value == 'active'){
      this.generateRandomViaColor()
    }
    this.generateRandomToColor()
    this.generateClass()
  }

  generateClass(): void{
    let direction = `bg-gradient-${this.directionOptionValue}`;
    let fromColor = `from-${this.selectedColorPalette.from.color}-${this.selectedColorPalette.from.number}`;
    let toColor = `to-${this.selectedColorPalette.to.color}-${this.selectedColorPalette.to.number}`;
    let viaOptionResponse = this.getViaOptionValue()
    if(viaOptionResponse.value == 'active'){
      let viaColor = `via-${this.selectedColorPalette.via.color}-${this.selectedColorPalette.via.number}`
      this.finalClass.value =`${direction} ${fromColor} ${viaColor} ${toColor}`;
      return;
    }
    this.finalClass.value = `${direction} ${fromColor} ${toColor}`;
  }

  getClass(): classResponse{
    return this.finalClass;
  }

}
// gerer la classe aui ne s'actualise pas et aussi voir comment diviser en classe les 
// classe pour text et les classe pour bg