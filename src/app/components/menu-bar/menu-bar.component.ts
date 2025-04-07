import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { SideColorComponent } from '../side-color/side-color.component';
import { SideRightInfoComponent } from '../side-right-info/side-right-info.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  @Output() menuBar = new EventEmitter<void>();
  @ViewChild(SideColorComponent) sideColor!: SideColorComponent;
  @ViewChild(SideRightInfoComponent) sideInfo!: SideRightInfoComponent;
  isOpen: boolean = false;
  handlerOpen() {
    this.isOpen = !this.isOpen;
    this.menuBar.emit();
  }
}
