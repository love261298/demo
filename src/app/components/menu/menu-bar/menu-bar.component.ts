import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  @Output() menuBar = new EventEmitter<void>();
  isOpen: boolean = false;
  handlerOpen() {
    this.isOpen = !this.isOpen;
    this.menuBar.emit();
  }
}
