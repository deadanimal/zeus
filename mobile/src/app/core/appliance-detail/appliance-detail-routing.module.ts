import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplianceDetailPage } from './appliance-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ApplianceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplianceDetailPageRoutingModule {}
