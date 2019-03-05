import { Component, OnInit } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  displayedColumns = ['productName', 'Quantity', 'FarmerName', 'RetailerName'];


  displayedColumnsTransactions = ['id', 'date', 'description', 'status'];
  dataSource: MatTableDataSource<any>;

  constructor() { }

  ngOnInit() {
  }

}
