import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommerceComponent } from './components/e-commerce/e-commerce.component';
import { BankingComponent } from './components/banking/banking.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { InputComponent } from './components/input/input.component';

const routes: Routes = [
  { path: 'E-Commerce', component: ECommerceComponent },
  { path: 'Banking', component: BankingComponent },
  { path: 'Blog/List', component: BlogListComponent },
  { path: 'Blog/Detail', component: BlogDetailComponent },
  { path: 'input', component: InputComponent },
  { path: '**', redirectTo: 'E-Commerce', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
