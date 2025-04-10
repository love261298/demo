import { NgModule } from '@angular/core';
import { BlogDetailComponent } from './blog-detail.component';
import { ImportPrimengModule } from '../../common/import-primeng.module';



@NgModule({
  declarations: [BlogDetailComponent],
  imports: [ImportPrimengModule],
  bootstrap: [BlogDetailComponent]
})
export class BlogDetailModule { }
