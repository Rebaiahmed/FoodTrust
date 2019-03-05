import { Component, OnInit } from '@angular/core';

import { RealTimeServiceService } from '../../../real-time-service.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public showMenu: string;
    public showFarmer = false ;
    public showSupplier = false ;
    public showRetailer = false ;
    public changeMenu = false;
    role: string ;

    constructor(private realtime: RealTimeServiceService) {}

    ngOnInit() {
        this.showMenu = '';
        // _____get the farmer role ____//
        const userdata = JSON.parse(localStorage.getItem('userData'));
        console.log('userdata' + JSON.stringify(userdata.userData.role));

        this.role = userdata.userData.role;

        if (userdata.userData.role === 'Farmer') {
          this.showFarmer = true ;
        }

        if (userdata.userData.role === 'Supplier') {
          this.showSupplier = true ;
        }

        if (userdata.userData.role === 'Retailer') {

          this.showRetailer = true ;
        }
if (this.role === 'Supplier') {
  this.getUserNotifications(1);

}


    }


    getUserNotifications(userId) {
  this.realtime.onNotification(userId)
  .subscribe(data => {
    console.log('data rom server' + data);
   // this.notifications =data ;

   alert('Vous avez une Notification');
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
