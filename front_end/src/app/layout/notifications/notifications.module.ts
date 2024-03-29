import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, NotificationsRoutingModule,MatTableModule,MatToolbarModule, MatGridListModule,MatListModule],
    declarations: [NotificationsComponent]
})
export class NotificationsModule {}
