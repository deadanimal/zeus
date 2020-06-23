import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileInformationEditPage } from './profile-information-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileInformationEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileInformationEditPageRoutingModule {}
