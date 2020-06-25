import { Component, OnInit } from '@angular/core';
import { AppliancesService } from 'src/app/shared/services/appliances/appliances.service';
import { Router, NavigationExtras } from '@angular/router';
// import { Appliance } from 'src/assets/mock/appliances';
import { BaseAppliancesService } from 'src/app/shared/services/base-appliances/base-appliances.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { BuildingsService } from 'src/app/shared/services/buildings/buildings.service';
import { AccountsService } from 'src/app/shared/services/accounts/accounts.service';
import { Appliance } from 'src/app/shared/services/appliances/appliances.model';
import { BaseAppliance } from 'src/app/shared/services/base-appliances/base-appliances.model';
import { Account } from 'src/app/shared/services/accounts/accounts.model';
import { Building } from 'src/app/shared/services/buildings/buildings.model';
import { User } from 'src/app/shared/services/users/users.model';


export class Temp {
  public id: string
  public name: string
  public active: boolean
  public account: string
  public building: string
  public appliance_base: string
  public type: string

  constructor(
      id: string,
      name: string,
      active: boolean,
      account: string,
      building: string,
      appliance_base: string,
      type: string
  ) {
      this.id = id
      this.name = name
      this.active = active
      this.account = account
      this.building = building
      this.appliance_base = appliance_base
      this.type = type
  }
}


@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.page.html',
  styleUrls: ['./appliances.page.scss'],
})
export class AppliancesPage implements OnInit {

  // Data
  accounts: Account[] = []
  appliances: Appliance[] = []
  bases: BaseAppliance[] = []
  buildings: Building[] = []
  users: User[] = []


  accountID = '5e84facb-7fba-4974-83bb-563d112ddea5'

  tempAppliance: Temp[] = []

  // Checker
  isListEmpty: boolean = false

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
  iconAir = 'assets/img/appliance/air.svg'
  iconBlender = 'assets/img/appliance/blender.svg'
  iconDeep = 'assets/img/appliance/deep.svg'
  iconInduction = 'assets/img/appliance/induction.svg'
  iconIron = 'assets/img/appliance/iron.svg'
  iconVacuum = 'assets/img/appliance/vacuum.svg'

  constructor(
    private applianceService: AppliancesService,
    private baseService: BaseAppliancesService,
    private userService: UsersService,
    private buildingService: BuildingsService,
    private accountService: AccountsService,
    private router: Router
  ) { 
    this.getData()
  }

  ngOnInit() {

  }

  getData() {
    this.applianceService.get().subscribe(
      () => {
        // this.appliances = this.applianceService.appliances
        this.applianceService.appliances.forEach(
          (appliance) => {
            if (appliance.account == this.accountID) {
              this.appliances.push(appliance)
              console.log(this.appliances)
            }
          }
        )
      },
      () => {},
      () => {
        this.appliances.forEach(
          (appliance) => {
            let splitted = appliance.name.split(' ', 2)
            // console.log('Splitted: ', splitted[1])
            let tempData = {
              id: appliance.id,
              name: appliance.name,
              active: appliance.active,
              account: appliance.account,
              building: appliance.building,
              appliance_base: appliance.appliance_base,
              type: splitted[1]
            }
            // console.log(tempData)
            this.tempAppliance.push(tempData)
          }
        )
      }
    )

    this.accountService.get().subscribe(
      () => {
        this.accounts = this.accountService.accounts
      },
      () => {},
      () => {}
    )

    this.baseService.get().subscribe(
      () => {
        this.bases = this.baseService.baseAppliances
      },
      () => {},
      () => {}
    )

    this.buildingService.get().subscribe(
      () => {
        this.buildings = this.buildingService.buildings
      },
      () => {},
      () => {}
    )

    this.userService.get().subscribe(
      () => {
        this.users = this.userService.users
      },
      () => {},
      () => {}
    )

    // this.appliances = Appliance
    // if (this.appliances.length == 0) {
    //   this.isListEmpty = true
    // }
    // else {
    //   this.isListEmpty = false
    // }
  }

  view(data: any) {
    let path = '/appliance-detail'
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(data)
      }
    }
    this.router.navigate([path], navigationExtras)
  }

}
