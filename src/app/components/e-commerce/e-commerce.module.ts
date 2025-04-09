import { NgModule } from '@angular/core';
import { ECommerceComponent } from './e-commerce.component';
import { ImportPrimengModule } from '../../common/import-primeng.module';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [ECommerceComponent],
  imports: [
    ImportPrimengModule
  ],
  exports: [ECommerceComponent],
  providers: [MessageService],
  bootstrap: [ECommerceComponent]
})
export class ECommerceModule { }
