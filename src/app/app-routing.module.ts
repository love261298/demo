import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommerceComponent } from './components/e-commerce/e-commerce.component';
import { BankingComponent } from './components/banking/banking.component';

const routes: Routes = [
  { path: 'E-Commerce', component: ECommerceComponent },
  { path: 'Banking', component: BankingComponent },
  { path: '**', redirectTo: 'E-Commerce', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
