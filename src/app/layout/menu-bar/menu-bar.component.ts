import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { SideColorComponent } from '../side-color/side-color.component';
import { SideRightInfoComponent } from '../side-right-info/side-right-info.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  currentUrl: string = ''
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }
  @Output() menuBar = new EventEmitter<void>();
  @ViewChild(SideColorComponent) sideColor!: SideColorComponent;
  @ViewChild(SideRightInfoComponent) sideInfo!: SideRightInfoComponent;
  isOpen: boolean = true;

  handlerOpen() {
    this.isOpen = !this.isOpen;
    this.menuBar.emit();
  }
}
