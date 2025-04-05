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
    InputIconModule
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
    InputIconModule
  ]
})
export class ImportPrimengModule { }
