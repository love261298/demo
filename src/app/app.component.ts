import { Component, ElementRef, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(SideMenuComponent) sideMenu!: SideMenuComponent;
  moved: boolean = false;
  constructor(private primengConfig: PrimeNGConfig) {
  }
  isOpen() {
    this.sideMenu.isOpen = !this.sideMenu.isOpen;
    this.moved = !this.moved
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
