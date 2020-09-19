import { Component, OnInit, NgZone, TemplateRef } from '@angular/core';
import { AppliancesService } from 'src/app/shared/services/appliances/appliances.service';
import { BaseAppliancesService } from 'src/app/shared/services/base-appliances/base-appliances.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Appliance } from 'src/app/shared/services/appliances/appliances.model';
import { BaseAppliance } from 'src/app/shared/services/base-appliances/base-appliances.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { LoadingBarService } from '@ngx-loading-bar/core';

import swal from 'sweetalert2';


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
  selector: 'app-appliances-base',
  templateUrl: './appliances-base.component.html',
  styleUrls: ['./appliances-base.component.scss']
})
export class AppliancesBaseComponent implements OnInit {

  // Data
  bases: BaseAppliance[] = []

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
    this.baseForm = this.formBuilder.group({
      brand: new FormControl('', Validators.compose([
        Validators.required
      ])),
      model: new FormControl('', Validators.compose([
        Validators.required
      ])),
      year: new FormControl('', Validators.compose([
        Validators.required
      ])),
      manufacturer: new FormControl('', Validators.compose([
        Validators.required
      ])),
      batch_num: new FormControl(''),
      active: new FormControl(true),
      group: new FormControl('NA')
    })
  }

  loadData() {
    this.baseService.get().subscribe(
      () => {
        this.bases = this.baseService.baseAppliances
        this.tableRows = [...this.bases]
        this.tableTemp = this.tableRows.map((prop, key) => {
          return {
            ...prop,
            id_index: key+1
          };
        });
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
        // console.log(this.tableBaseTemp)
      }
    )

    this.baseService.getChart1().subscribe(
      (res) => {
        this.chartData1 = res
        this.getChart1()
      }
    )

    this.baseService.getChart1().subscribe(
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
    else if (type == 'base') {
      this.baseService.post(this.baseForm.value).subscribe(
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

  getChart1() {
    this.zone.runOutsideAngular(
      () => {
        let chart = am4core.create("chart-base-1", am4charts.PieChart);

        // Add data
        chart.data = this.chartData1.list_

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "quantity";
        pieSeries.dataFields.category = "brand";
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
        let chart = am4core.create("chart-base-2", am4charts.PieChart);

        // Add data
        chart.data = this.chartData2.list_

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "quantity";
        pieSeries.dataFields.category = "group";
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

}
