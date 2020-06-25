import { Component, OnInit, NgZone } from '@angular/core';
import * as moment from 'moment';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

import { LoadingBarService } from '@ngx-loading-bar/core';

import { AppliancesService } from 'src/app/shared/services/appliances/appliances.service';
import { BaseAppliancesService } from 'src/app/shared/services/base-appliances/base-appliances.service';
import { DevicesService } from 'src/app/shared/services/devices/devices.service';
import { Appliance } from 'src/app/shared/services/appliances/appliances.model';
import { BaseAppliance } from 'src/app/shared/services/base-appliances/base-appliances.model';
import { Device } from 'src/app/shared/services/devices/devices.model';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  // Data
  databases
  appliances: Appliance[] = []
  bases: BaseAppliance[] = []
  devices: Device[] = []

  // Chart
  chartSummary: any
  chartBrand: any
  chartLabel: any

  constructor(
    private applianceService: AppliancesService,
    private baseService: BaseAppliancesService,
    private deviceService: DevicesService,
    private loadingBar: LoadingBarService,
    private zone: NgZone
  ) {
    // console.log('Constructor')
    this.loadData()
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.getSummary()
      this.getBrand()
      this.getLabel()
    })
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chartSummary) {
        this.chartSummary.dispose()
      }
      if (this.chartBrand) {
        this.chartBrand.dispose()
      }
      if (this.chartLabel) {
        this.chartLabel.dispose()
      }
    })
  }

  loadData() {
    this.loadingBar.start()
    this.applianceService.get().subscribe(
      () => {
        this.appliances = this.applianceService.appliances
        // console.log('Data loaded')
        this.calculateAppliance()
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      }
    )
    this.baseService.get().subscribe(
      () => {
        this.bases = this.baseService.baseAppliances
        // console.log('Data loaded')
        this.calculateBase()
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      }
    )
    this.deviceService.get().subscribe(
      () => {
        this.devices = this.deviceService.devices
        // console.log('Data loaded')
        this.calculateDevice()
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      }
    )
  }

  calculateAppliance() {
    let arrayBrand = []
    // this.appliances.forEach(
    //   (appliance) => {
    //     arrayBrand.push(appliance.brand)
    //   }
    // )
  }

  calculateBase() {
    let arrayBrand = []
    let arrayBrandIndex = 1
    // this.bases.forEach(
    //   (base) => {
    //     console.log('Base', base)
    //     console.log('Length', arrayBrand.length)
    //     console.log('Index', arrayBrandIndex)
    //     if (arrayBrand.length > 0) {
    //       console.log('more')
    //       arrayBrand.forEach(
    //         (brand) => {
    //           console.log('Brand', brand)
    //           let found = false
    //           if (brand == base.brand) {
    //             found = true
    //           }
    //           if (arrayBrandIndex == arrayBrand.length && found == true) {
    //             arrayBrand.push(base.brand)
    //             console.log(arrayBrand)
    //           }
    //           arrayBrandIndex += 1
    //         }
    //       )
    //     }
    //     else {
    //       console.log('zero')
    //       arrayBrand.push(base.brand)
    //     }
    //   }
    // )
  }

  calculateDevice() {

  }

  getSummary() {
    let chart = am4core.create("chartdivDatabaseSummary", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        category: "Jan",
        value1: 1,
        value2: 5,
        value3: 3
      },
      {
        category: "Feb",
        value1: 2,
        value2: 5,
        value3: 3
      },
      {
        category: "Mar",
        value1: 3,
        value2: 5,
        value3: 4
      },
      {
        category: "Apr",
        value1: 4,
        value2: 5,
        value3: 6
      },
      {
        category: "May",
        value1: 3,
        value2: 5,
        value3: 4
      },
      {
        category: "Jun",
        value1: 2,
        value2: 13,
        value3: 1
      },
      {
        category: "Jul",
        value1: 0,
        value2: 0,
        value3: 0
      },
      {
        category: "Aug",
        value1: 0,
        value2: 0,
        value3: 0
      },
      {
        category: "Sep",
        value1: 0,
        value2: 0,
        value3: 0
      },
      {
        category: "Oct",
        value1: 0,
        value2: 0,
        value3: 0
      },
      {
        category: "Nov",
        value1: 0,
        value2: 0,
        value3: 0
      },
      {
        category: "Dec",
        value1: 0,
        value2: 0,
        value3: 0
      }
    ];

    chart.colors.step = 2;
    chart.padding(30, 30, 10, 30);
    chart.legend = new am4charts.Legend();

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.calculateTotals = true;
    valueAxis.renderer.minWidth = 50;


    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series1.name = "Base Appliance";
    series1.dataFields.categoryX = "category";
    series1.dataFields.valueY = "value1";
    series1.dataFields.valueYShow = "totalPercent";
    series1.dataItems.template.locations.categoryX = 0.5;
    series1.stacked = true;
    series1.tooltip.pointerOrientation = "vertical";

    let bullet1 = series1.bullets.push(new am4charts.LabelBullet());
    bullet1.interactionsEnabled = false;
    bullet1.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet1.label.fill = am4core.color("#ffffff");
    bullet1.locationY = 0.5;

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.columns.template.width = am4core.percent(80);
    series2.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series2.name = "Appliance";
    series2.dataFields.categoryX = "category";
    series2.dataFields.valueY = "value2";
    series2.dataFields.valueYShow = "totalPercent";
    series2.dataItems.template.locations.categoryX = 0.5;
    series2.stacked = true;
    series2.tooltip.pointerOrientation = "vertical";

    let bullet2 = series2.bullets.push(new am4charts.LabelBullet());
    bullet2.interactionsEnabled = false;
    bullet2.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet2.locationY = 0.5;
    bullet2.label.fill = am4core.color("#ffffff");

    let series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.columns.template.width = am4core.percent(80);
    series3.columns.template.tooltipText =
      "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
    series3.name = "Device";
    series3.dataFields.categoryX = "category";
    series3.dataFields.valueY = "value3";
    series3.dataFields.valueYShow = "totalPercent";
    series3.dataItems.template.locations.categoryX = 0.5;
    series3.stacked = true;
    series3.tooltip.pointerOrientation = "vertical";

    let bullet3 = series3.bullets.push(new am4charts.LabelBullet());
    bullet3.interactionsEnabled = false;
    bullet3.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
    bullet3.locationY = 0.5;
    bullet3.label.fill = am4core.color("#ffffff");

    chart.scrollbarX = new am4core.Scrollbar();

    this.chartSummary = chart
  }

  getBrand() {
    let chart = am4core.create("chartdivDatabaseBrand", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        "brand": "Panasonic",
        "amount": 11
      },
      {
        "brand": "Sharp",
        "amount": 3
      },
      {
        "brand": "Midea",
        "amount": 4
      },
      {
        "brand": "Hitachi",
        "amount": 5
      }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "brand";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

    this.chartBrand = chart
  }

  getLabel() {
    let chart = am4core.create("chartdivDatabaseLabel", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        "label": "Device",
        "amount": 100
      },
      {
        "label": "Main",
        "amount": 70
      },
      {
        "label": "Sub",
        "amount": 30
      }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "label";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

    this.chartLabel = chart
  }

}
