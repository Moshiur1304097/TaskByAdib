import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpApiComponent } from './http-api/http-api.component';


const routes: Routes = [
    { path: 'customers',
     loadChildren: () => 
  import('./customers/customerDetails/customers.module').then(m => m.CustomersModule) },

    { path: 'orders', loadChildren: () =>
  import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'http-api', component:HttpApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
