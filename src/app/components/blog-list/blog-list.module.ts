import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list.component';
import { ImportPrimengModule } from '../../common/import-primeng.module';



@NgModule({
  declarations: [BlogListComponent],
  imports: [ImportPrimengModule],
  exports: [BlogListComponent],
  bootstrap: [BlogListComponent]
})
export class BlogListModule { }
