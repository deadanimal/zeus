import { Component, OnInit, TemplateRef } from '@angular/core';

import swal from 'sweetalert2';
import { Device } from 'src/app/shared/services/devices/devices.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DevicesService } from 'src/app/shared/services/devices/devices.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-device-readings',
  templateUrl: './device-readings.component.html',
  styleUrls: ['./device-readings.component.scss']
})
export class DeviceReadingsComponent implements OnInit {

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
    private modalService: BsModalService
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
            id_index: key+1
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

}
