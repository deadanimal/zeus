import { Component, OnInit } from '@angular/core';
import { AppliancesService } from 'src/app/shared/services/appliances/appliances.service';
import { Router } from '@angular/router';
import { Appliance } from 'src/assets/mock/appliances';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.page.html',
  styleUrls: ['./appliances.page.scss'],
})
export class AppliancesPage implements OnInit {

  // Data
  appliances = []

  // Checker
  isListEmpty: boolean = true

  // Icon
  iconError = 'assets/img/default/404-error.svg'
  iconAirCond = 'assets/img/appliance/air-conditioner.svg'
  iconDishwasher = 'assets/img/appliance/dishwasher.svg'
  iconFridge = 'assets/img/appliance/fridge.svg'
  iconLamp = 'assets/img/appliance/lamp.svg'
  iconLamp1 = 'assets/img/appliance/lamp-1.svg'
  iconLCD = 'assets/img/appliance/lcd.svg'
  iconMicrowave = 'assets/img/appliance/microwave.svg'
  iconToaster = 'assets/img/appliance/toaster.svg'
  iconDryer = 'assets/img/appliance/tumble-dryer.svg'

  constructor(
    private applianceService: AppliancesService,
    private router: Router
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  getData() {
    this.appliances = Appliance
    if (this.appliances.length == 0) {
      this.isListEmpty = true
    }
    else {
      this.isListEmpty = false
    }
  }

  view() {
    let path = '/appliance-detail'
    this.router.navigate([path])
  }

}
