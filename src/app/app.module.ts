import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImportPrimengModule } from './common/import-primeng.module';
import { MenuModule } from './layout/menu.module';
import { ECommerceModule } from './components/e-commerce/e-commerce.module';
import { BankingModule } from './components/banking/banking.module';
import { BlogListModule } from './components/blog-list/blog-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ImportPrimengModule,
    MenuModule,
    ECommerceModule,
    BankingModule,
    BlogListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
