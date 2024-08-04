export type toolName = 'bg'|'text'
export type toolOption = 'custum'|'random'|'ready'

// this types are for gradienGeneratorService function who will return a response to component 
// that response is used by component  
// because service don't update string valeur only object value
export type toolNameResponse = { value : toolName }
export type toolOptionResponse = { value: toolOption }

export class GradientHeaderConfig {
  constructor(private toolName: toolName, private toolOption: toolOption){}

  setToolName(toolName: toolName) : void{
    this.toolName = toolName;
  }
  getToolName(): toolNameResponse{
    return {value: this.toolName};
  }

  setToolOption(toolOption: toolOption) {
    this.toolOption = toolOption;
  }
  getTooLOption(): toolOptionResponse{
    return {value: this.toolOption};
  }
}