import { Component } from '@angular/core';

@Component({
  selector: 'app-gradient-custum',
  standalone: true,
  imports: [],
  templateUrl: './gradient-custum.component.html',
  styleUrl: './gradient-custum.component.css'
})
export class GradientCustumComponent {
  FinalClass : string = "bg-gradient-to-r from-fuchia-500 to-cyan-500"
}
