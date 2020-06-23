import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileInformationEditPageRoutingModule } from './profile-information-edit-routing.module';

import { ProfileInformationEditPage } from './profile-information-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfileInformationEditPageRoutingModule
  ],
  declarations: [ProfileInformationEditPage]
})
export class ProfileInformationEditPageModule {}
