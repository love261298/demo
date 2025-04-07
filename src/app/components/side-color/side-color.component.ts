import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-side-color',
  templateUrl: './side-color.component.html',
  styleUrl: './side-color.component.scss'
})
export class SideColorComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  isOpen: boolean = false;
  close(e: any): void {
    this.sidebarRef.close(e);
  }
}
