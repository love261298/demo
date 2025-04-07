import { NgModule } from '@angular/core';
import { ImportPrimengModule } from '../common/import-primeng.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SideColorComponent } from './side-color/side-color.component';
import { SideRightInfoComponent } from './side-right-info/side-right-info.component';



@NgModule({
  declarations: [SideMenuComponent, MenuBarComponent, SideColorComponent, SideRightInfoComponent],
  imports: [
    ImportPrimengModule
  ], exports: [SideMenuComponent, MenuBarComponent],
})
export class MenuModule { }
