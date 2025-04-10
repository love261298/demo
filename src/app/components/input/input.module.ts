import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { ImportPrimengModule } from '../../common/import-primeng.module';
import { NodeService } from '../../services/nodeservice';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    ImportPrimengModule
  ],
  providers: [NodeService]
})
export class InputModule { }
