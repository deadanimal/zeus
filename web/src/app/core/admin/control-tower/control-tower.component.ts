import { Component, OnInit, NgZone } from '@angular/core';
import { Account } from 'src/app/shared/services/accounts/accounts.model';
import { Device } from 'src/app/shared/services/devices/devices.model';
import { AccountsService } from 'src/app/shared/services/accounts/accounts.service';
import { DevicesService } from 'src/app/shared/services/devices/devices.service';
import { AppliancesService } from 'src/app/shared/services/appliances/appliances.service';
import { Appliance } from 'src/app/shared/services/appliances/appliances.model';
import { NotificationsService } from 'src/app/shared/services/notifications/notifications.service';
import { Notification } from 'src/app/shared/services/notifications/notifications.model';
import { ApplianceTransaction } from 'src/app/shared/services/appliance-transactions/appliance-transactions.model';

import * as moment from 'moment';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-control-tower',
  templateUrl: './control-tower.component.html',
  styleUrls: ['./control-tower.component.scss']
})
export class ControlTowerComponent implements OnInit {

  // Data
  accounts: Account[] = []
  devices: Device[] = []
  appliances: Appliance[] = []
  notifications: Notification[] = []
  transactions: ApplianceTransaction[] = []
  feeds: any[] = []

  activities = []
  activitiesLengthOld = 0
  activitiesLengthNew = 0

  chart: any

  selectedAppliance = []

  queryAccountText: string = ''

  // Checker
  isGotAccount: boolean = false
  isGotDevice: boolean = false

  isDeviceSelected: boolean = false

  // Checker
  isFeedEmpty: boolean = true

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


  // Interval
  intervalFeed

  // Chart
  chartPower: any

  constructor(
    private accountService: AccountsService,
    private deviceService: DevicesService,
    private applianceService: AppliancesService,
    private notificationService: NotificationsService,
    private zone: NgZone
  ) {
    this.getData()
  }

  ngOnInit() {
    this.intervalFeed = setInterval(
      () => {
        this.getFeeds()
        this.getJSONLog()
      }, 2000
    )
    this.getCharts()
    // this.zone.runOutsideAngular(
    //   () => {
    //     this.initChart()
    //     console.log('runOutsideAngular')
    //   }
    // )
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chart) {
          console.log('Chart disposed')
          this.chart.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
    })
  }
  
  getData() {
    this.applianceService.get().subscribe()
  }

  getFeeds() {
    this.applianceService.getActivity().subscribe(
      (res) => {
        // console.log()
        this.activities = res
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
                if (appliance.id == this.activities[this.activitiesLengthNew - 1].appliance) {
                  let applianceName = appliance.name
                  let timestamp = moment(this.activities[this.activitiesLengthNew - 1].created_at).format('hh:mm:ss A')
                  this.activities[this.activitiesLengthNew - 1].appliance = applianceName
                  this.activities[this.activitiesLengthNew - 1].created_at = timestamp
                  this.feeds.push(this.activities[this.activitiesLengthNew - 1])
                  console.log('gee', this.activities[this.activitiesLengthNew - 1])
                  console.log('Jumpa if')
                  this.isFeedEmpty = false

                }
              }
            )
          }
          else {
            this.applianceService.appliances.forEach(
              (appliance) => {
                if (appliance.id == this.activities[this.activitiesLengthNew - 1].appliance) {
                  console.log('Jumpa else')
                  let applianceName = appliance.name
                  let timestamp = moment(this.activities[this.activitiesLengthNew - 1].created_at).format('hh:mm:ss A')
                  this.activities[this.activitiesLengthNew - 1].appliance = applianceName
                  this.activities[this.activitiesLengthNew - 1].created_at = timestamp
                  this.feeds.push(this.activities[this.activitiesLengthNew - 1])
                  this.feeds.shift()
                }
              }
            )
          }
        }
      }
    )
  }

  getChart() {
    let chart = am4core.create("chartcontrol", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0;

    chart.padding(0, 0, 0, 0);

    chart.zoomOutButton.disabled = true;

    let data = [];
    let visits = 10;
    let i = 0;

    for (i = 0; i <= 30; i++) {
      visits -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date().setSeconds(i - 30), value: visits });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 30;
    dateAxis.dateFormats.setKey("second", "ss");
    dateAxis.periodChangeDateFormats.setKey("second", "[bold]h:mm a");
    dateAxis.periodChangeDateFormats.setKey("minute", "[bold]h:mm a");
    dateAxis.periodChangeDateFormats.setKey("hour", "[bold]h:mm a");
    dateAxis.renderer.inside = true;
    dateAxis.renderer.axisFills.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.interpolationDuration = 500;
    valueAxis.rangeChangeDuration = 500;
    valueAxis.renderer.inside = true;
    valueAxis.renderer.minLabelPosition = 0.05;
    valueAxis.renderer.maxLabelPosition = 0.95;
    valueAxis.renderer.axisFills.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.interpolationDuration = 500;
    series.defaultState.transitionDuration = 0;
    series.tensionX = 0.8;

    chart.events.on("datavalidated", function () {
      dateAxis.zoom({ start: 1 / 15, end: 1.2 }, false, true);
    });

    dateAxis.interpolationDuration = 500;
    dateAxis.rangeChangeDuration = 500;

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        if (interval) {
          clearInterval(interval);
        }
      }
      else {
        // startInterval();
      }
    }, false);

    // add data
    let interval;
    function startInterval() {
      interval = setInterval(function () {
        visits =
          visits + Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
        let lastdataItem = series.dataItems.getIndex(series.dataItems.length - 1);
        chart.addData(
          { date: new Date(lastdataItem.dateX.getTime() + 1000), value: visits },
          1
        );
      }, 1000);
    }

    // startInterval();

    // all the below is optional, makes some fancy effects
    // gradient fill of the series
    series.fillOpacity = 1;
    let gradient = new am4core.LinearGradient();
    gradient.addColor(chart.colors.getIndex(0), 0.2);
    gradient.addColor(chart.colors.getIndex(0), 0);
    series.fill = gradient;

    // this makes date axis labels to fade out
    dateAxis.renderer.labels.template.adapter.add("fillOpacity", function (fillOpacity, target) {
      let dataItem = target.dataItem;
      return dataItem.position;
    })

    // need to set this, otherwise fillOpacity is not changed and not set
    dateAxis.events.on("validated", function () {
      am4core.iter.each(dateAxis.renderer.labels.iterator(), function (label) {
        label.fillOpacity = label.fillOpacity;
      })
    })


    // bullet at the front of the line
    let bullet = series.createChild(am4charts.CircleBullet);
    bullet.circle.radius = 5;
    bullet.fillOpacity = 1;
    bullet.fill = chart.colors.getIndex(0);
    bullet.isMeasured = false;

    series.events.on("validated", function () {
      bullet.moveTo(series.dataItems.last.point);
      bullet.validatePosition();
    });

    this.chart = chart

  }

  getJSONLog() {
    this.deviceService.getLog().subscribe(
      (res) => {
        console.log('l', res.body.length)
        if (res.body.length < 100) {
          let newData = JSON.parse(res.body)
          if (newData.device == 'bolt-003') {

            let label = moment.unix(newData.time).format('h:mm:ss a')
            let power = newData.power
            console.log('update', label, power)
            
            let dataset = {
              date: label,
              value: power
            }
            this.chart.addData(dataset)
            this.chart.validateData();
          }
        }
        // console.log()
      }
    )
  }

}
