import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  links = ['Ship', 'Shipment History', 'Address Book'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

}
