import { Component, OnInit } from '@angular/core';


import { ApiServiceService} from '../../../api-service.service';

@Component({
  selector: 'app-confirm-product-reception',
  templateUrl: './confirm-product-reception.component.html',
  styleUrls: ['./confirm-product-reception.component.scss']
})
export class ConfirmProductReceptionComponent implements OnInit {

  constructor(private apiservice: ApiServiceService) { }

  ngOnInit() {
  }




  Send()
  {
    alert("clicked");
  }
}
