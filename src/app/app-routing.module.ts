import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddresBookComponent } from './addres-book/addres-book.component';
import { ShipHistoryComponent } from './ship-history/ship-history.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [  
  { path: '', component: ShippingComponent },
  { path: 'shipment-history', component: ShipHistoryComponent },
  { path: 'addres-book', component: AddresBookComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
