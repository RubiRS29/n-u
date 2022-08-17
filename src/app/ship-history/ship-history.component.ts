import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ShipHistoryModel } from '../models/ShipHistory';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-ship-history',
  templateUrl: './ship-history.component.html',
  styleUrls: ['./ship-history.component.css']
})

export class ShipHistoryComponent implements AfterViewInit {


  constructor() {

  }

  displayedColumns: string[] = ['check', 'position', 'name', 'weight', 'symbol', 'store', 'cartons'];
  dataSource = new MatTableDataSource<ShipHistoryModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}

const ELEMENT_DATA: ShipHistoryModel[] = createFakeData()

function createFakeData() {
  var fakeDataArray: ShipHistoryModel[] = [];;
  var fakeData: ShipHistoryModel;


  for (let i = 0; i < 40; i++) {
    let fake_date = faker.date.birthdate();

    fakeData = {
      tracking: Math.floor(Math.random() * 100),
      date: faker.date.past(3).toISOString().substring(0, 10),
      reference: faker.address.street(),
      reference_2: faker.address.street(),
      store_d: Math.floor(Math.random() * 100),
      total_cartons: Math.floor(Math.random() * 20)
    };
    fakeDataArray.push(fakeData);
  }

  return fakeDataArray;
}

