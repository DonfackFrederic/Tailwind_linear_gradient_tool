import { NgClass } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isOpen: WritableSignal<boolean> = signal(false);

  toggleSideBar = () => this.isOpen.set(!this.isOpen());
}
