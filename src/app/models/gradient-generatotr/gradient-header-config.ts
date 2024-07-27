export class GradientHeaderConfig {
  toolName!:'bg'|'text';
  toolOption!:'custum'|'random'|'ready';
  constructor(toolName:'bg'|'text', toolOption:'custum'|'ready'|'ready'){
    this.toolName = toolName;
    this.toolOption = toolOption;
  }
}