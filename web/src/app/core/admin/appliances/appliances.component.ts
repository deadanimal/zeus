import { Component, OnInit, NgZone, TemplateRef } from '@angular/core';
import { AppliancesService } from 'src/app/shared/services/appliances/appliances.service';
import { BaseAppliancesService } from 'src/app/shared/services/base-appliances/base-appliances.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Appliance } from 'src/app/shared/services/appliances/appliances.model';
import { BaseAppliance } from 'src/app/shared/services/base-appliances/base-appliances.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { LoadingBarService } from '@ngx-loading-bar/core';

import * as moment from 'moment';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

import swal from 'sweetalert2';
import { Account } from 'src/app/shared/services/accounts/accounts.model';
import { AccountsService } from 'src/app/shared/services/accounts/accounts.service';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.scss']
})
export class AppliancesComponent implements OnInit {

  // Data
  appliances: Appliance[] = []
  bases: BaseAppliance[] = []
  accounts: Account[] = []
  chartData1: any
  chartData2: any

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = []
  SelectionType = SelectionType;

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  // Form
  applianceForm: FormGroup
  baseForm: FormGroup

  // Chart

  constructor(
    private accountService: AccountsService,
    private applianceService: AppliancesService,
    private baseService: BaseAppliancesService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private loadingBar: LoadingBarService,
    private zone: NgZone
  ) {
    this.loadData()
  }

  ngOnInit() {
    // console.log('ngOnInit')
    this.applianceForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      account: new FormControl(null),
      building: new FormControl(null),
      appliance_base: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      purchase_date: new FormControl(null),
      install_date: new FormControl(null),
      serial_number: new FormControl(null),
      active: new FormControl(true)
    })
  }

  loadData() {
    // console.log('Loading data')
    this.loadingBar.start()
    this.applianceService.get().subscribe(
      () => {
        this.appliances = this.applianceService.appliances
        this.tableRows = [...this.appliances]
        this.tableTemp = this.tableRows.map((prop, key) => {
          return {
            ...prop,
            id_index: key + 1
          };
        });
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
      }
    )

    this.accountService.get().subscribe(
      () => {
        this.accounts = this.accountService.accounts
      }
    )

    this.applianceService.getChart1().subscribe(
      (res) => {
        this.chartData1 = res
        this.getChart1()
      }
    )

    this.applianceService.getChart2().subscribe(
      (res) => {
        this.chartData2 = res
        this.getChart2()
      }
    )
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    this.applianceForm.reset()
    this.baseForm.reset()
  }

  confirm(type: string) {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to add this new entry?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-info",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-outline-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.register(type)
      }
    })
  }

  register(type: string) {
    // console.log('Registering')
    let purchaseData = moment(this.applianceForm.value.purchase_date).format('YYYY-MM-DDTHH:mm:ss.SSSSZ')
    let installDate = moment(this.applianceForm.value.install_date).format('YYYY-MM-DDTHH:mm:ss.SSSSZ')
    this.applianceForm.controls['purchase_date'].setValue(purchaseData)
    this.applianceForm.controls['install_date'].setValue(installDate)

    this.loadingBar.start()
    if (type == 'appliance') {
      this.applianceService.post(this.applianceForm.value).subscribe(
        () => {
          // console.log('Register success')
          this.loadingBar.complete()
        },
        () => {
          // console.log('Register unsuccess')
          this.loadingBar.complete()
        },
        () => {
          this.swalRegistered(type)
          this.loadData()
        }
      )
    }
  }

  swalRegistered(type: string) {
    let message = ''
    if (type == 'appliance') {
      message = 'A new entry has been added to Appliances!'
    }
    else if (type == 'base') {
      message = 'A new entry has been aded to Base Appliances!'
    }
    swal.fire({
      title: "Success",
      text: message,
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    }).then((result) => {
      if (result.value) {
        this.closeModal()
      }
    })
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value.toLowerCase();
    this.tableTemp = this.tableRows.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) ! == -1 || !val;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }


  getChart1() {
    this.zone.runOutsideAngular(
      () => {
        let chart = am4core.create("chart-appliance-1", am4charts.PieChart);

        // Add data
        chart.data = [
          {
            "type": "Inactive",
            "value": this.chartData1.inactive
          },
          {
            "type": "Active",
            "value": this.chartData1.active
          }
        ];

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "type";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeOpacity = 1;

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        chart.hiddenState.properties.radius = am4core.percent(0);
      }
    )
  }

  getChart2() {
    this.zone.runOutsideAngular(
      () => {
        let chart = am4core.create("chart-appliance-2", am4charts.XYChart);

        // Add data
        chart.data = this.chartData2

        // Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 50;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        // Create series
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "quantity";
        series.dataFields.dateX = "timestamp";
        series.strokeWidth = 2;
        series.minBulletDistance = 10;
        series.tooltipText = "{valueY}";
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.background.cornerRadius = 20;
        series.tooltip.background.fillOpacity = 0.5;
        series.tooltip.label.padding(12, 12, 12, 12)

        // Add cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.xAxis = dateAxis;
        chart.cursor.snapToSeries = series;
      }
    )
  }

}
