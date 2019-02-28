import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [






            {
                path: '',
                redirectTo: 'addProduct'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'components',
                loadChildren:
                    './material-components/material-components.module#MaterialComponentsModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule'
            },
            {
                path: 'grid',
                loadChildren: './grid/grid.module#GridModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'blank-page',
                loadChildren: './blank-page/blank-page.module#BlankPageModule'
            },



            {
              path: 'wallet',
              loadChildren: './wallet/wallet.module#WalletModule'
             },

             {
              path: 'transactions',
              loadChildren: './transactions/transactions.module#TransactionsModule'
             },

             {
              path: 'notifications',
              loadChildren: './notifications/notifications.module#NotificationsModule'
             },


             {
              path: 'addProduct',
              loadChildren: './add-product/add-product.module#AddProductModule'
             },

             {
              path: 'tracking',
              loadChildren: './tracking/tracking.module#TrackingModule'
             },








        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
