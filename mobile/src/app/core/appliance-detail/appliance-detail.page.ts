import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from "chart.js";
import { AppliancesService } from 'src/app/shared/services/appliances/appliances.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DevicesService } from 'src/app/shared/services/devices/devices.service';
import * as moment from 'moment';
@Component({
  selector: 'app-appliance-detail',
  templateUrl: './appliance-detail.page.html',
  styleUrls: ['./appliance-detail.page.scss'],
})
export class ApplianceDetailPage implements OnInit {

  // Data
  appliance
  applianceName: string = 'Lamp'
  
  // Segment
  segment: string

  // Chart.js
  @ViewChild('canvasDay', {static: false}) canvasDay: ElementRef
  @ViewChild('canvasWeek', {static: false}) canvasWeek: ElementRef
  @ViewChild('canvasMonth', {static: false}) canvasMonth: ElementRef
  @ViewChild('canvasYear', {static: false}) canvasYear: ElementRef

  private chartDay
  private chartWeek
  private chartMonth
  private chartYear

  // Interval
  public intervalCSV

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
    private deviceService: DevicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.getData()
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        if (params && params.special) {
          this.appliance = JSON.parse(params.special)
          // console.log(this.appliance)
        }
      }
    )
  }

  ngOnInit() {
    this.segment = 'D'
    // this.intervalCSV = setInterval(
    //   () => {
    //     this.getCSV()
    //   },
    //   3000
    // )
  }

  ionViewDidEnter() {
    this.initChartDay()
  }

  ngOnDestroy() {
    clearInterval(this.intervalCSV)
  }

  getData() {

  }

  navigatePage(path: string) {
    let navigationPath = '/' + path
    this.router.navigate([navigationPath])
  }

  segmentChanged(ev: string) {
    console.log(ev)
    if (this.segment == 'D') {
      setTimeout(
        () => {
          this.initChartDay()
        }, 1000
      )
    }
    else if (this.segment == 'W') {
      setTimeout(
        () => {
          this.initChartWeek()
        }, 1000
      )
    }
    else if (this.segment == 'M') {
      setTimeout(
        () => {
          this.initChartMonth()
        }, 1000
      )
    }
    else if (this.segment == 'Y') {
      setTimeout(
        () => {
          this.initChartYear()
        }, 1000
      )
    }
  }

  initChartDay() {
    this.chartDay = new Chart(this.canvasDay.nativeElement, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
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

  initChartWeek() {
    this.chartWeek = new Chart(this.canvasWeek.nativeElement, {
      type: "line",
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
          {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
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
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });
  }

  initChartMonth() {
    this.chartMonth = new Chart(this.canvasMonth.nativeElement, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        datasets: [
          {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
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
            data: [65, 59, 80, 81, 56],
            spanGaps: false
          }
        ]
      }
    });
  }

  initChartYear() {
    this.chartYear = new Chart(this.canvasYear.nativeElement, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
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
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });
  }

  getCSV() {
    this.chartDay.data.labels = []
    this.chartDay.data.datasets.data = []

    this.deviceService.getValue().subscribe(
      (res: any[]) => {
        res.forEach(
          (data) => {
            if (this.appliance.type == 'Fridge' && data.label == 'Fridge') {
              let powerValue = Number(data.power)*240/1000
              let newTime = moment.unix(data.time).format('h:mm:ss a')
              this.chartDay.data.labels.push(newTime)
              this.chartDay.data.datasets[0].data.push(powerValue)
              this.chartDay.update()
            }
            else if (this.appliance.type == 'AC' || data.label == 'AC') {
              console.log('tes')
              console.log(this.appliance.type)
              console.log(data.label)
              let powerValue = Number(data.power)*240/1000
              let newTime = moment.unix(data.time).format('h:mm:ss a')
              this.chartDay.data.labels.push(newTime)
              this.chartDay.data.datasets[0].data.push(powerValue)
              this.chartDay.update()
            }
            else if (this.appliance.type == 'Dryer' && data.label == 'Dryer') {
              let powerValue = Number(data.power)*240/1000
              let newTime = moment.unix(data.time).format('h:mm:ss a')
              this.chartDay.data.labels.push(newTime)
              this.chartDay.data.datasets[0].data.push(powerValue)
              this.chartDay.update()
            }
            else if (this.appliance.type == 'Washing' && data.label == 'Washing') {
              let powerValue = Number(data.power)*240/1000
              let newTime = moment.unix(data.time).format('h:mm:ss a')
              this.chartDay.data.labels.push(newTime)
              this.chartDay.data.datasets[0].data.push(powerValue)
              this.chartDay.update()
            }
            else if (this.appliance.type == 'Microwave' && data.label == 'Microwave') {
              let powerValue = Number(data.power)*240/1000
              let newTime = moment.unix(data.time).format('h:mm:ss a')
              this.chartDay.data.labels.push(newTime)
              this.chartDay.data.datasets[0].data.push(powerValue)
              this.chartDay.update()
            }
            else if (this.appliance.type == 'Air' && data.label == 'Air') {
              let powerValue = Number(data.power)*240/1000
              let newTime = moment.unix(data.time).format('h:mm:ss a')
              this.chartDay.data.labels.push(newTime)
              this.chartDay.data.datasets[0].data.push(powerValue)
              this.chartDay.update()
            }
            else if (this.appliance.type == 'Deep' && data.label == 'Deep') {
              let powerValue = Number(data.power)*240/1000
              let newTime = moment.unix(data.time).format('h:mm:ss a')
              this.chartDay.data.labels.push(newTime)
              this.chartDay.data.datasets[0].data.push(powerValue)
              this.chartDay.update()
            }
            else if (this.appliance.type == 'Blender' && data.label == 'Blender') {
              let powerValue = Number(data.power)*240/1000
              let newTime = moment.unix(data.time).format('h:mm:ss a')
              this.chartDay.data.labels.push(newTime)
              this.chartDay.data.datasets[0].data.push(powerValue)
              this.chartDay.update()
            }
            else if (this.appliance.type == 'Induction' && data.label == 'Induction') {
              let powerValue = Number(data.power)*240/1000
              let newTime = moment.unix(data.time).format('h:mm:ss a')
              this.chartDay.data.labels.push(newTime)
              this.chartDay.data.datasets[0].data.push(powerValue)
              this.chartDay.update()
            }
            else if (this.appliance.type == 'Iron' && data.label == 'Iron') {
              let powerValue = Number(data.power)*240/1000
              let newTime = moment.unix(data.time).format('h:mm:ss a')
              this.chartDay.data.labels.push(newTime)
              this.chartDay.data.datasets[0].data.push(powerValue)
              this.chartDay.update()
            }
            else if (this.appliance.type == 'Vacuum' && data.label == 'Vacuum') {
              let powerValue = Number(data.power)*240/1000
              let newTime = moment.unix(data.time).format('h:mm:ss a')
              this.chartDay.data.labels.push(newTime)
              this.chartDay.data.datasets[0].data.push(powerValue)
              this.chartDay.update()
            }
          }
        )
      }
    )
  }

}
