import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ChartModule } from 'primeng/chart';
import { KnobModule } from 'primeng/knob';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutoCompleteModule,
    ButtonModule,
    FormsModule,
    SidebarModule,
    StyleClassModule,
    InputTextModule,
    AvatarModule,
    IconFieldModule,
    InputIconModule,
    PanelMenuModule,
    RadioButtonModule,
    SelectButtonModule,
    ChartModule,
    KnobModule,
    DropdownModule,
    DataViewModule,
    TagModule
  ],
  exports: [
    CommonModule,
    AutoCompleteModule,
    ButtonModule,
    FormsModule,
    SidebarModule,
    StyleClassModule,
    InputTextModule,
    AvatarModule,
    IconFieldModule,
    InputIconModule,
    PanelMenuModule,
    RadioButtonModule,
    SelectButtonModule,
    ChartModule,
    KnobModule,
    DropdownModule,
    DataViewModule,
    TagModule
  ]
})
export class ImportPrimengModule { }
