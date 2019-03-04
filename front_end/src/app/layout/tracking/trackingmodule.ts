import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrackingComponent} from './tracking.component';

import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: TrackingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), MatTableModule],
    exports: [RouterModule]
})
export class TrackingRoutingModule {}
