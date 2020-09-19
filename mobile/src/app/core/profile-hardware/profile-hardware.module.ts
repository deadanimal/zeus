
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileHardwarePageRoutingModule } from './profile-hardware-routing.module';

import { ProfileHardwarePage } from './profile-hardware.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileHardwarePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileHardwarePage]
})
export class ProfileHardwarePageModule {}