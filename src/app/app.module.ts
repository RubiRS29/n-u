import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShippingComponent } from './shipping/shipping.component';
import { MaterialModule } from './material/material.module';
import { ShipHistoryComponent } from './ship-history/ship-history.component';
import { ThemePalette } from '@angular/material/core';
import { AddresBookComponent } from './addres-book/addres-book.component';


@NgModule({
  declarations: [
    AppComponent,
    ShippingComponent,
    ShipHistoryComponent,
    AddresBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
