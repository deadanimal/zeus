import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Activity } from 'src/assets/mock/activities';
import { Router } from '@angular/router';
import { Chart } from "chart.js";
import { DevicesService } from 'src/app/shared/services/devices/devices.service';
import { interval } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // Data
  activities = []

  notiActivities = []

  dataKiri: number = 0
  dataKanan: number = 0

  // Segment
  segment: string

  // Chart
  @ViewChild('canvasPower', {static: false}) canvasPower: ElementRef
  @ViewChild('canvasAppliance', {static: false}) canvasAppliance: ElementRef
  private chartPower
  private chartAppliance

  // Checker
  isFeedEmpty: boolean = true


  // Length
  notifyMe: any[] = []

  intervalNoti
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

  constructor(
    private deviceService: DevicesService,
    private router: Router
  ) { 
    this.getData()
    this.getCSV()
  }

  ngOnInit() {
    this.segment = 'P'
    this.intervalNoti = setInterval(
      () => {
        this.getNoti()
      },
      10000
    )
  }

  getData() {
    this.activities = Activity
    if (this.activities.length == 0) {
      this.isFeedEmpty = true
    }
    else {
      this.isFeedEmpty = false
    }
  }

  view() {
    let path = '/appliance-detail'
    this.router.navigate([path])
  }

  ionViewWillEnter() {
    this.initChartPower()
    this.initChartAppliance()
  }

  ngOnDestroy() {
    clearInterval(this.intervalCSV)
    clearInterval(this.intervalNoti)
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
            label: "",
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
          },
          {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(192,75,192,0.4)",
            borderColor: "rgba(192,75,192,0.4)",
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
          },
          {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,75,0.4)",
            borderColor: "rgba(75,192,75,0.4)",
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

  getCSV() {
    this.deviceService.getCSV().subscribe(
      (res) => {
        let row = res.body.split(",")
        if (res.body.length < 30) {
          let label = moment.unix(res.test).format('h:mm:ss a')
          let data1 = row[0]*240/1000
          let data2 = row[1]*240/1000
          let data3 = row[2]*240/1000
          this.dataKiri = (this.dataKiri + data1 + data2 + data3) / 60
          this.dataKanan = (this.dataKanan + data1 + data2 + data3) / 50
          this.chartPower.data.labels.push(label)
          this.chartPower.data.datasets[0].data.push(data1)
          this.chartPower.data.datasets[1].data.push(data2)
          this.chartPower.data.datasets[2].data.push(data3)
          this.chartPower.update()
        }
        // console.log('Dashboard: ', res)
        // this.
        console.log()
      }
    )
    // this.intervalCSV = setInterval(
    //   () => {
    //     this.deviceService.getCSV().subscribe(
    //       (res) => {
    //         let row = res.body.split(",")
    //         if (res.body.length < 30) {
    //           let label = moment.unix(res.test).format('h:mm:ss a')
    //           let data1 = row[0]*240/1000
    //           let data2 = row[1]*240/1000
    //           let data3 = row[2]*240/1000
    //           this.dataKiri = (this.dataKiri + data1 + data2 + data3) / 60
    //           this.dataKanan = (this.dataKanan + data1 + data2 + data3) / 50
    //           this.chartPower.data.labels.push(label)
    //           this.chartPower.data.datasets[0].data.push(data1)
    //           this.chartPower.data.datasets[1].data.push(data2)
    //           this.chartPower.data.datasets[2].data.push(data3)
    //           this.chartPower.update()
    //         }
    //         // console.log('Dashboard: ', res)
    //         // this.
    //         console.log()
    //       }
    //     )
    //   }, 1000
    // )
  }

  addData(chart, label, data) {

  }


  getNoti() {
    this.notiActivities = []
    this.deviceService.getValue().subscribe(
      (res: any[]) => {
        res = res.sort((n1,n2) => n1 - n2);
        res.forEach(
          (data) => {
            data.time = moment.unix(data.time).format('h:mm:ss a')
            this.notiActivities.push(data)
          }
        )
      },
      () => {},
      () => {}
    )
  }

}
