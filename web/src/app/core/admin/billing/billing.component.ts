import { Component, OnInit, TemplateRef } from '@angular/core';
import { Bill } from 'src/app/shared/services/bills/bills.model';
import { BillsService } from 'src/app/shared/services/bills/bills.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { LoadingBarService } from '@ngx-loading-bar/core';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  // Data
  bills: Bill[] = []

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
  

  constructor(
    private billService: BillsService,
    private loadingBar: LoadingBarService,
    private modalService: BsModalService
  ) { 
    // console.log('Constructor')
    this.loadData()
  }

  ngOnInit() {
    // console.log('ngOnInit')
  }

  loadData() {
    // console.log('Loading data')
    this.loadingBar.start()
    this.billService.get().subscribe(
      () => {
        this.bills = this.billService.bills
        this.tableRows = [...this.bills]
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
    // this.deviceForm.reset()
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
