import { NgModule } from '@angular/core';
import { ImportPrimengModule } from '../../common/import-primeng.module';
import { BankingComponent } from './banking.component';



@NgModule({
  declarations: [BankingComponent],
  imports: [
    ImportPrimengModule
  ],
  exports: [BankingComponent],
  bootstrap: [BankingComponent]
})
export class BankingModule { }
