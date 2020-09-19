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
  private chart3: any
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
      this.getChart1()
      this.getChart2()
      this.getChart3()
    })
  }

  getChart() {
    let chart = am4core.create("chartdashboard1", am4charts.XYChart);
    chart.paddingRight = 20;

    chart.data = generateChartData();

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      "timeUnit": "minute",
      "count": 1
    };
    dateAxis.tooltipDateFormat = "HH:mm, d MMMM";

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.title.text = "";

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "visits";
    series.tooltipText = ": [bold]{valueY}[/]";
    series.fillOpacity = 0.3;


    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    // chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.series.push(series);


    dateAxis.start = 0.8;
    dateAxis.keepSelection = true;



    function generateChartData() {
      let chartData = [];
      // current date
      let firstDate = new Date();
      // now set 500 minutes back
      firstDate.setMinutes(firstDate.getDate() - 500);

      // and generate 500 data items
      let visits = 500;
      for (var i = 0; i < 500; i++) {
        let newDate = new Date(firstDate);
        // each time we add one minute
        newDate.setMinutes(newDate.getMinutes() + i);
        // some random number
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        // add data item to the array
        chartData.push({
          date: newDate,
          visits: visits
        });
      }
      return chartData;
    }


    this.chart = chart
  }

  getChart1() {
    let chart = am4core.create("chartdashboard2", am4charts.PieChart);

    // Add data
    chart.data = [{
      "base": "Fridge",
      "total": 501
    }, {
      "base": "Air Conditioner",
      "total": 301
    }, {
      "base": "Washer",
      "total": 201
    }, {
      "base": "Cooker",
      "total": 165
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "total";
    pieSeries.dataFields.category = "base";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

  }

  getChart2() {
    let chart = am4core.create("chartdashboard3", am4charts.XYChart);

    // Add data
    chart.data = [{
      "date": new Date(2020, 6, 20),
      "value": 90
    }, {
      "date": new Date(2020, 6, 21),
      "value": 102
    }, {
      "date": new Date(2020, 6, 22),
      "value": 65
    }, {
      "date": new Date(2020, 6, 23),
      "value": 62
    }, {
      "date": new Date(2020, 6, 24),
      "value": 55
    }, {
      "date": new Date(2020, 6, 25),
      "value": 81,
      "disabled": false
    }];

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.dateX = "date";
    lineSeries.name = "Sales";
    lineSeries.strokeWidth = 3;
    lineSeries.strokeDasharray = "5,4";

    // Add simple bullet
    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.disabled = true;
    bullet.propertyFields.disabled = "disabled";

    let secondCircle = bullet.createChild(am4core.Circle);
    secondCircle.radius = 6;
    secondCircle.fill = chart.colors.getIndex(8);


    bullet.events.on("inited", function (event) {
      animateBullet(event.target.circle);
    })


    function animateBullet(bullet) {
      let animation = bullet.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
      animation.events.on("animationended", function (event) {
        animateBullet(event.target.object);
      })
    }
  }

  getChart3() {
    let chart = am4core.create("chartdashboard4", am4charts.XYChart);

    chart.data = [{ date: 1577743200000, open: 122, close: 104 },
    { date: 1577829600000, open: 121, close: 70 },
    { date: 1577916000000, open: 101, close: 55 },
    { date: 1578002400000, open: 103, close: 45 },
    { date: 1578088800000, open: 153, close: 85 },
    { date: 1578175200000, open: 150, close: 116 },
    { date: 1578261600000, open: 135, close: 153 },
    { date: 1578348000000, open: 98, close: 152 },
    { date: 1578434400000, open: 101, close: 192 },
    { date: 1578520800000, open: 110, close: 225 },
    { date: 1578607200000, open: 157, close: 233 },
    { date: 1578693600000, open: 128, close: 232 },
    { date: 1578780000000, open: 101, close: 235 },
    { date: 1578866400000, open: 109, close: 200 },
    { date: 1578952800000, open: 142, close: 214 },
    { date: 1579039200000, open: 123, close: 224 },
    { date: 1579125600000, open: 99, close: 176 },
    { date: 1579212000000, open: 100, close: 172 },
    { date: 1579298400000, open: 67, close: 138 },
    { date: 1579384800000, open: 81, close: 127 },
    { date: 1579471200000, open: 39, close: 137 },
    { date: 1579557600000, open: 73, close: 127 },
    { date: 1579644000000, open: 78, close: 154 },
    { date: 1579730400000, open: 116, close: 127 },
    { date: 1579816800000, open: 136, close: 78 },
    { date: 1579903200000, open: 139, close: 61 },
    { date: 1579989600000, open: 162, close: 13 },
    { date: 1580076000000, open: 201, close: 41 },
    { date: 1580162400000, open: 221, close: 72 },
    { date: 1580248800000, open: 257, close: 87 },
    { date: 1580335200000, open: 211, close: 114 },
    { date: 1580421600000, open: 233, close: 138 },
    { date: 1580508000000, open: 261, close: 141 },
    { date: 1580594400000, open: 279, close: 130 }
    ]

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 60;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;

    // only for the legend
    let iconSeries = chart.series.push(new am4charts.ColumnSeries())
    iconSeries.fill = am4core.color("#ec0800");
    iconSeries.strokeOpacity = 0;
    iconSeries.stroke = am4core.color("#ec0800");
    iconSeries.name = "Events";
    iconSeries.dataFields.dateX = "date";
    iconSeries.dataFields.valueY = "v";

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
    series.sequencedInterpolation = true;
    series.stroke = am4core.color("#1b7cb3");
    series.strokeWidth = 2;
    series.name = "District Metered Usage";
    series.stroke = chart.colors.getIndex(0);
    series.fill = series.stroke;
    series.fillOpacity = 0.8;

    let bullet = series.bullets.push(new am4charts.CircleBullet())
    bullet.fill = new am4core.InterfaceColorSet().getFor("background");
    bullet.fillOpacity = 1;
    bullet.strokeWidth = 2;
    bullet.circle.radius = 4;

    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "open";
    series2.sequencedInterpolation = true;
    series2.strokeWidth = 2;
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.getStrokeFromObject = true;
    series2.tooltip.label.fill = am4core.color("#000");
    series2.name = "SP Aggregate usage";
    series2.stroke = chart.colors.getIndex(7);
    series2.fill = series2.stroke;

    let bullet2 = series2.bullets.push(new am4charts.CircleBullet())
    bullet2.fill = bullet.fill;
    bullet2.fillOpacity = 1;
    bullet2.strokeWidth = 2;
    bullet2.circle.radius = 4;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();

    let negativeRange;

    // create ranges
    chart.events.on("datavalidated", function () {
      series.dataItems.each(function (s1DataItem) {
        let s1PreviousDataItem;
        let s2PreviousDataItem;

        let s2DataItem = series2.dataItems.getIndex(s1DataItem.index);

        if (s1DataItem.index > 0) {
          s1PreviousDataItem = series.dataItems.getIndex(s1DataItem.index - 1);
          s2PreviousDataItem = series2.dataItems.getIndex(s1DataItem.index - 1);
        }

        let startTime = am4core.time.round(new Date(s1DataItem.dateX.getTime()), dateAxis.baseInterval.timeUnit, dateAxis.baseInterval.count).getTime();

        // intersections
        if (s1PreviousDataItem && s2PreviousDataItem) {
          let x0 = am4core.time.round(new Date(s1PreviousDataItem.dateX.getTime()), dateAxis.baseInterval.timeUnit, dateAxis.baseInterval.count).getTime() + dateAxis.baseDuration / 2;
          let y01 = s1PreviousDataItem.valueY;
          let y02 = s2PreviousDataItem.valueY;

          let x1 = startTime + dateAxis.baseDuration / 2;
          let y11 = s1DataItem.valueY;
          let y12 = s2DataItem.valueY;

          let intersection = am4core.math.getLineIntersection({ x: x0, y: y01 }, { x: x1, y: y11 }, { x: x0, y: y02 }, { x: x1, y: y12 });

          startTime = Math.round(intersection.x);
        }

        // start range here
        if (s2DataItem.valueY > s1DataItem.valueY) {
          if (!negativeRange) {
            negativeRange = dateAxis.createSeriesRange(series);
            negativeRange.date = new Date(startTime);
            negativeRange.contents.fill = series2.fill;
            negativeRange.contents.fillOpacity = 0.8;
          }
        }
        else {
          // if negative range started
          if (negativeRange) {
            negativeRange.endDate = new Date(startTime);
          }
          negativeRange = undefined;
        }
        // end if last
        if (s1DataItem.index == series.dataItems.length - 1) {
          if (negativeRange) {
            negativeRange.endDate = new Date(s1DataItem.dateX.getTime() + dateAxis.baseDuration / 2);
            negativeRange = undefined;
          }
        }
      })
    })
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
