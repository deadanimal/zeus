import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Activity } from 'src/assets/mock/activities';
import { Router } from '@angular/router';
import { Chart } from "chart.js";
import { DevicesService } from 'src/app/shared/services/devices/devices.service';
import { interval } from 'rxjs';
import * as moment from 'moment';
import { AppliancesService } from 'src/app/shared/services/appliances/appliances.service';
import { Appliance } from 'src/app/shared/services/appliances/appliances.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // Data
  activities = []
  activitiesLengthOld = 0
  activitiesLengthNew = 0

  notiActivities = []

  dataKiri: number = 0
  dataKanan: number = 0

  feeds: any[] = []

  // Segment
  segment: string

  // Chart
  @ViewChild('canvasPower', { static: false }) canvasPower: ElementRef
  @ViewChild('canvasAppliance', { static: false }) canvasAppliance: ElementRef
  private chartPower
  private chartAppliance

  // Checker
  isFeedEmpty: boolean = true


  // Length
  notifyMe: any[] = []

  intervalFeed
  intervalCSV

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
  iconWater = 'assets/img/appliance/water-heater.svg'
  iconCooker = 'assets/img/appliance/rice-cooker.svg'
  iconSteamer = 'assets/img/appliance/steamer.svg'
  iconKettle = 'assets/img/appliance/kettle.svg'

  constructor(
    private deviceService: DevicesService,
    private applianceService: AppliancesService,
    private router: Router
  ) {
    this.getData()
  }

  ngOnInit() {
    this.segment = 'P'
    
    this.intervalFeed = setInterval(
      () => {
        this.getFeeds()
        this.getCSV()
      }, 2000
    )
  }

  getFeeds() {
    this.applianceService.getActivity().subscribe(
      (res) => {
        // console.log()
        this.activities  = res
        if (this.activitiesLengthNew == 0) {
          this.activitiesLengthNew = this.activities.length
        }
        else {
          this.activitiesLengthOld = this.activitiesLengthNew
          this.activitiesLengthNew = this.activities.length
        }

        console.log('old', this.activitiesLengthOld)
        console.log('new', this.activitiesLengthNew)

        if (this.activitiesLengthNew != this.activitiesLengthOld) {
          if (this.feeds.length < 5) {
            console.log('Feed < 5')
            this.applianceService.appliances.forEach(
              (appliance) => {
                if (appliance.id == this.activities[this.activitiesLengthNew-1].appliance) {
                  let applianceName = appliance.name
                  let timestamp = moment(this.activities[this.activitiesLengthNew-1].created_at).format('hh:mm:ss A')
                  this.activities[this.activitiesLengthNew-1].appliance = applianceName
                  this.activities[this.activitiesLengthNew-1].created_at = timestamp
                  this.feeds.push(this.activities[this.activitiesLengthNew-1])
                  console.log( 'gee',this.activities[this.activitiesLengthNew-1])
                  console.log('Jumpa if')
                  this.isFeedEmpty = false
                  
                }
              }
            )
          }
          else {            
            this.applianceService.appliances.forEach(
              (appliance) => {
                if (appliance.id == this.activities[this.activitiesLengthNew-1].appliance) {
                  console.log('Jumpa else')
                  let applianceName = appliance.name
                  let timestamp = moment(this.activities[this.activitiesLengthNew-1].created_at).format('hh:mm:ss A')
                  this.activities[this.activitiesLengthNew-1].appliance = applianceName
                  this.activities[this.activitiesLengthNew-1].created_at = timestamp
                  this.feeds.push(this.activities[this.activitiesLengthNew-1])
                  this.feeds.shift()
                }
              }
            )
          }
        }
      }
    )
  }

  getCSV() {
    this.deviceService.getCSV().subscribe(
      (res) => {
        console.log('l', res.body.length)
        if (res.body.length < 100) {
          let newData = JSON.parse(res.body)
          if (newData.device == 'bolt-003') {

            let label = moment.unix(newData.time).format('h:mm:ss a')
            let power = newData.power
            console.log('update', label, power)
            this.chartPower.data.labels.push(label)
            this.chartPower.data.datasets[0].data.push(power)
            this.chartPower.update()
          }
        }
        // console.log()
      }
    )
  }

  getData() {
    this.applianceService.get().subscribe()
  }

  view() {
    let path = '/appliance-detail'
    this.router.navigate([path])
  }

  ionViewWillEnter() {
    this.initChartPower()
    this.initChartAppliance()
  }

  ionViewWillLeave() {
    clearInterval(this.intervalCSV)
    clearInterval(this.intervalFeed)
    console.log('destroy')
  }

  segmentChanged(ev: any) {
    console.log('Segment: ', this.segment)
    console.log('Segment changed: ', ev)
    if (this.segment == 'A') {
      setTimeout(
        () => {
          this.initChartAppliance()
        }, 1000
      )
    }
    if (this.segment == 'P') {
      setTimeout(
        () => {
          this.initChartPower()
        }, 1000
      )
    }
  }

  initChartAppliance() {
    this.chartAppliance = new Chart(this.canvasAppliance.nativeElement, {
      type: 'pie',
      data: {
        datasets: [{
          data: [
            55,
            120,
            155,
            160,
            95
          ],
          backgroundColor: [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
          ],
          label: 'Dataset 1'
        }],
        labels: [
          'Lamp',
          'Solar',
          'Fridge',
          'Microwave',
          'Fan'
        ]
      },
      options: {
        responsive: true
      }
    })
  }

  initChartPower() {
    this.chartPower = new Chart(this.canvasPower.nativeElement, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "kWh",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,0.4)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
            spanGaps: false
          }
        ]
      }
    });

  }

  

  addData(chart, label, data) {

  }


  getNoti() {
    this.notiActivities = []
    this.deviceService.getValue().subscribe(
      (res: any[]) => {
        res = res.sort((n1, n2) => n1 - n2);
        res.forEach(
          (data) => {
            data.time = moment.unix(data.time).format('h:mm:ss a')
            this.notiActivities.push(data)
          }
        )
      },
      () => { },
      () => { }
    )
  }

}