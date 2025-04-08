import { Component, OnInit, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-side-color',
  templateUrl: './side-color.component.html',
  styleUrl: './side-color.component.scss'
})
export class SideColorComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.primaryColor)
  }
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  isOpen: boolean = false;
  primaryColor: string = '1';
  presets: string = '1';
  surFaceColor: string = '1';
  colorScheme: string = '1';
  ingredient!: string;
  handlePrimaryColor(e: any) {
    this.primaryColor = e;
  }
  handleSurFaceColor(e: any) {
    this.surFaceColor = e;
  }
  handlePresets(e: any) {
    this.presets = e;
  }
  handleColorScheme(e: any) {
    this.colorScheme = e;
  }
  close(e: any): void {
    this.sidebarRef.close(e);
  }
}
