import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

import { ApiServiceService} from '../../api-service.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor(private apiservice: ApiServiceService) { }

  ngOnInit() {
  }


  DownloadImage()
  {
    alert("clicked");
  }

}
