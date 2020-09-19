import { Component, OnInit, TemplateRef, NgZone } from '@angular/core';

import swal from 'sweetalert2';
import { Device } from 'src/app/shared/services/devices/devices.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DevicesService } from 'src/app/shared/services/devices/devices.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-device-install-maintenance',
  templateUrl: './device-install-maintenance.component.html',
  styleUrls: ['./device-install-maintenance.component.scss']
})
export class DeviceInstallMaintenanceComponent implements OnInit {

  // Data
  devices: Device[] = []

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
  deviceForm: FormGroup

  // Chart

  constructor(
    private deviceService: DevicesService,
    private formBuilder: FormBuilder,
    private loadingBar: LoadingBarService,
    private modalService: BsModalService,
    private zone: NgZone
  ) {
    // console.log('Constructor')
    this.loadData()
  }

  ngOnInit() {
    // console.log('ngOnInit')
    this.deviceForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      label: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })

    this.getCharts()
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart()
      this.getChart1()
    })
  }

  loadData() {
    // console.log('Loading data')
    this.loadingBar.start()
    this.deviceService.get().subscribe(
      () => {
        this.devices = this.deviceService.devices
        this.tableRows = [...this.devices]
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
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    this.deviceForm.reset()
  }

  confirm() {
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
        this.register()
      }
    })
  }

  register() {
    // console.log('Registering')
    this.deviceService.post(this.deviceForm.value).subscribe(
      () => {
        // console.log('Register success')
        this.loadingBar.complete()
      },
      () => {
        // console.log('Register unsuccess')
        this.loadingBar.complete()
      },
      () => {
        this.swalRegistered()
        this.loadData()
      }
    )
  }

  swalRegistered() {
    swal.fire({
      title: "Success",
      text: "A new entry has been aded to Device!",
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
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  getChart() {
    let chart = am4core.create("chartdeviceim1", am4charts.PieChart);

    // Add data
    chart.data = [{
      "state": "Maintain",
      "total": 27
    }, {
      "state": "Install",
      "total": 99
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "total";
    pieSeries.dataFields.category = "state";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);

  }

  getChart1() {
    let chart = am4core.create("chartdeviceim2", am4charts.XYChart);

    // Add data
    chart.data = [{
      "country": "5.00am",
      "visits": 0
    },{
      "country": "6.00am",
      "visits": 0
    }, {
      "country": "7.00am",
      "visits": 0
    }, {
      "country": "8.00am",
      "visits": 1
    }, {
      "country": "9.00am",
      "visits": 2
    }, {
      "country": "10.00am",
      "visits": 0
    }];

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
      if (target.dataItem && target.dataItem.index && 2 == 2) {
        return dy + 25;
      }
      return dy;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.name = "Visits";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;



  }

}
