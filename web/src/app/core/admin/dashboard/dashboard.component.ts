import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { DevicesService } from 'src/app/shared/services/devices/devices.service';
import { AppliancesService } from 'src/app/shared/services/appliances/appliances.service';
import { BillsService } from 'src/app/shared/services/bills/bills.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  // Data
  totalUser: number = 0
  totalDevice: number = 0
  totalAppliance: number = 0
  totalBill: number = 0

  // Chart
  private chart: any
  private chart1: any
  private chart2: any
  clicked: any = true
  clicked1: any = false

  constructor(
    private zone: NgZone,
    private userService: UsersService,
    private deviceService: DevicesService,
    private applianceService: AppliancesService,
    private billService: BillsService
  ) {
    this.loadData()
  }

  ngOnInit() {
    this.getCharts()
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

  getChart() {
    let chart = am4core.create("chartdivDash", am4charts.XYChart);

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    for (var i = 1; i < 4; i++) {
      createSeries("value" + i, "Phase " + i);
    }

    // Create series
    function createSeries(s, name) {
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value" + s;
      series.dataFields.dateX = "date";
      series.name = name;

      let segment = series.segments.template;
      segment.interactionsEnabled = true;

      let hoverState = segment.states.create("hover");
      hoverState.properties.strokeWidth = 3;

      let dimmed = segment.states.create("dimmed");
      dimmed.properties.stroke = am4core.color("#dadada");

      segment.events.on("over", function (event) {
        processOver(event.target.parent.parent.parent);
      });

      segment.events.on("out", function (event) {
        processOut(event.target.parent.parent.parent);
      });

      let data = [];
      let value = Math.round(Math.random() * 100) + 100;
      for (var i = 1; i < 100; i++) {
        value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 30 + i / 5);
        let dataItem = { date: new Date(2020, 0, i) };
        dataItem["value" + s] = value;
        data.push(dataItem);
      }

      series.data = data;
      return series;
    }

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.scrollable = true;
    chart.legend.itemContainers.template.events.on("over", function (event) {
      processOver(event.target.dataItem.dataContext);
    })

    chart.legend.itemContainers.template.events.on("out", function (event) {
      processOut(event.target.dataItem.dataContext);
    })

    function processOver(hoveredSeries) {
      hoveredSeries.toFront();

      hoveredSeries.segments.each(function (segment) {
        segment.setState("hover");
      })

      chart.series.each(function (series: any) {
        if (series != hoveredSeries) {
          series.segments.each(function (segment) {
            segment.setState("dimmed");
          })
          series.bulletsContainer.setState("dimmed");
        }
      });
    }

    function processOut(hoveredSeries) {
      chart.series.each(function (series: any) {
        series.segments.each(function (segment) {
          segment.setState("default");
        })
        series.bulletsContainer.setState("default");
      });
    }


    this.chart = chart
  }

  loadData() {
    this.userService.get().subscribe(
      () => { },
      () => { },
      () => {
        this.totalUser = this.userService.users.length
      }
    )
    this.deviceService.get().subscribe(
      () => { },
      () => { },
      () => {
        this.totalDevice = this.deviceService.devices.length
      }
    )
    this.applianceService.get().subscribe(
      () => { },
      () => { },
      () => {
        this.totalAppliance = this.applianceService.appliances.length
      }
    )
    this.billService.get().subscribe(
      () => { },
      () => { },
      () => {
        this.totalBill = this.billService.bills.length
      }
    )
  }

  calculateStats() {

  }

}
