import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [CommonModule, NotificationsRoutingModule, MatGridListModule,MatListModule],
    declarations: [NotificationsComponent]
})
export class NotificationsModule {}