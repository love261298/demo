import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImportPrimengModule } from './common/import-primeng.module';
import { MenuModule } from './layout/menu.module';
import { ECommerceModule } from './components/e-commerce/e-commerce.module';
import { BankingModule } from './components/banking/banking.module';
import { BlogListModule } from './components/blog-list/blog-list.module';
import { BlogDetailModule } from './components/blog-detail/blog-detail.module';
import { InputModule } from './components/input/input.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ImportPrimengModule,
    MenuModule,
    ECommerceModule,
    BankingModule,
    BlogListModule,
    BlogDetailModule,
    InputModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
