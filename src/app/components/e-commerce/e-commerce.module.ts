import { NgModule } from '@angular/core';
import { ECommerceComponent } from './e-commerce.component';
import { ImportPrimengModule } from '../../common/import-primeng.module';



@NgModule({
  declarations: [ECommerceComponent],
  imports: [
    ImportPrimengModule
  ],
  exports: [ECommerceComponent],
  bootstrap: [ECommerceComponent]
})
export class ECommerceModule { }
