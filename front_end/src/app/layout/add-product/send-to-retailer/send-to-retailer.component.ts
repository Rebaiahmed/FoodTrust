import { Component, OnInit } from '@angular/core';

import { ApiServiceService} from '../../../api-service.service';


@Component({
  selector: 'app-send-to-retailer',
  templateUrl: './send-to-retailer.component.html',
  styleUrls: ['./send-to-retailer.component.scss']
})
export class SendToRetailerComponent implements OnInit {


  public retailers :  any[]

  constructor(private apiservice: ApiServiceService) { }




  ngOnInit() {
    //get the current product_________//

    //____get the list of the retailers_____//
  }



  Send()
  {

    alert("clicked");
  }

}
