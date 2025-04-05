import { NgModule } from '@angular/core';
import { ImportPrimengModule } from '../../common/import-primeng.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';



@NgModule({
  declarations: [SideMenuComponent, MenuBarComponent],
  imports: [
    ImportPrimengModule
  ], exports: [SideMenuComponent, MenuBarComponent],
})
export class MenuModule { }
