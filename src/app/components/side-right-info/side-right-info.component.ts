import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-side-right-info',
  templateUrl: './side-right-info.component.html',
  styleUrl: './side-right-info.component.scss'
})
export class SideRightInfoComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  isOpen: boolean = false;
  close(e: any): void {
    this.sidebarRef.close(e);
  }
}
