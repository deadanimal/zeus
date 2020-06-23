import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Activity } from 'src/assets/mock/activities';
import { Router } from '@angular/router';
import { Chart } from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // Data
  activities = []

  // Segment
  segment: string

  // Chart
  @ViewChild('canvasPower', {static: false}) canvasPower: ElementRef
  @ViewChild('canvasAppliance', {static: false}) canvasAppliance: ElementRef
  private chartPower
  private chartAppliance

  // Checker
  isFeedEmpty: boolean = true

  // Icon
  iconError = 'assets/img/default/404-error.svg'
  iconMicrowave = 'assets/img/appliance/microwave.svg'
  iconToaster = 'assets/img/appliance/toaster.svg'

  constructor(
    private router: Router
  ) { 
    this.getData()
  }

  ngOnInit() {
    this.segment = 'A'
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
    this.initChartAppliance()
    this.initChartPower()
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

}
