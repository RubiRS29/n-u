import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddresBookComponentModel } from '../models/AddresBook';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-addres-book',
  templateUrl: './addres-book.component.html',
  styleUrls: ['./addres-book.component.css']
})
export class AddresBookComponent implements AfterViewInit {


  constructor() { 
    
  }
  displayedColumns: string[] = ['company_name', 'store_number', 'street', 'city', 'state', 'zip_code', 'edit', 'delete'];
  dataSource = new MatTableDataSource<AddresBookComponentModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator:any  = MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


const ELEMENT_DATA: AddresBookComponentModel[] = createFakeData()

function createFakeData() {
   var fakeDataArray : AddresBookComponentModel[] = []; ;
   var fakeData : AddresBookComponentModel;

   for (let i = 0; i < 40; i++) {

    fakeData = { company_name: faker.company.bs(), 
      store_number: Math.floor(Math.random() * 100), 
      street: faker.address.street(), 
      city: faker.address.city(),
      state: faker.address.state(),
      zip_code: faker.address.zipCode()

    };
    fakeDataArray.push(fakeData);
   }

   return fakeDataArray;
}
