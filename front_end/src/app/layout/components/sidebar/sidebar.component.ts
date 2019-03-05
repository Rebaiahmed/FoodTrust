import { Component, OnInit } from '@angular/core';

import { RealTimeServiceService } from '../../../real-time-service.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public showMenu: string;
    public showFarmer:boolean = false ;
    public showSupplier:boolean = false ;
    public showRetailer:boolean = false ;
    public changeMenu:boolean= false;

    constructor(private realtime:RealTimeServiceService) {}

    ngOnInit() {
        this.showMenu = '';
        //_____get the farmer role ____//
        /*let userdata = JSON.parse(localStorage.getItem('userData'));
        console.log('userdata' + JSON.stringify(userdata.userData.role));

        if(userdata.userData.role ==="Farmer")
        {
          this.showFarmer= true ;
        }

        if(userdata.userData.role ==="Supplier")
        {
          this.showSupplier= true ;
        }

        if(userdata.userData.role ==="Retailer")
        {

          this.showRetailer= true ;
        }*/



    }


    getUserNotifications(userId)
{
  this.realtime.onNotification(userId)
  .subscribe(data => {
    console.log('data rom server' + data);
   // this.notifications =data ;
   this.changeMenu = true ;
 });
}

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
