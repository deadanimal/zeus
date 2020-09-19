import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreLayoutPage } from './core-layout.page';

const routes: Routes = [
  {
    path: '',
    component: CoreLayoutPage,
    children: [
      {
        path: 'appliances',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/appliances/appliances.module').then(m => m.AppliancesPageModule)
          }
        ]
      },
      {
        path: 'information',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/information/information.module').then(m => m.InformationPageModule)
          }
        ]
      },
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../core/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/core/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/core/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CoreLayoutPageRoutingModule {}
