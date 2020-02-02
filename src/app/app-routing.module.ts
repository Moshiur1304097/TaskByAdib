import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'customer-list', loadChildren: () => 
  import('./customers/customers.module').then(m => m.CustomersModule) },

    { path: 'order-list', loadChildren: () =>
  import('./orders/orders.module').then(m => m.OrdersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
