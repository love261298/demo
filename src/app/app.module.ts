import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportPrimengModule } from './common/import-primeng.module';
import { MenuModule } from './layout/menu.module';
import { ECommerceModule } from './components/e-commerce/e-commerce.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImportPrimengModule,
    MenuModule,
    ECommerceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
