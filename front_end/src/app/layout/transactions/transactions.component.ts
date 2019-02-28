import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  displayedColumns = ['id', 'name', 'progress', 'color'];


  displayedColumnsTransactions = ['id', 'date', 'description', 'status'];
  dataSource: MatTableDataSource<Transaction>;

  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;

  constructor() {
      // Create 100 users
      //const users: UserData[] = [];
      /*for (let i = 1; i <= 100; i++) {
          users.push(createNewUser(i));
      }*/

      // Assign the data to the data source for the table to render
     // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
  }





  applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      /*this.dataSource.filter = filterValue;
      if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
      }*/
  }
}

/** Constants used to fill up our data base. */
/*const COLORS = [
  'maroon',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'purple',
  'fuchsia',
  'lime',
  'teal',
  'aqua',
  'blue',
  'navy',
  'black',
  'gray'
];
const NAMES = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth'
];*/

/*export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}*/


export interface Transaction {
  id: string;
  date : string ;
  descrition:string;
  status: string;
}




