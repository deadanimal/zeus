import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
// import { User } from 'src/assets/mock/admin-user/users.model'
import { MocksService } from 'src/app/shared/services/mocks/mocks.service';

import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { User } from 'src/app/shared/services/users/users.model';
import { LoadingBarService } from '@ngx-loading-bar/core';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // Table
  users: User[] = []
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
  registerForm: FormGroup
  registerFormMessages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'A valid email is required' }
    ],
    'password1': [
      { type: 'required', message: 'Password is required' }
    ],
    'password2': [
      { type: 'required', message: 'Password is required' }
    ]
  }

  updateForm: FormGroup
  updateFormMessages = {
    'name': [
      { type: 'required', message: 'Name is required' }
    ],
    'user_type': [
      { type: 'required', message: 'User type is required' },
    ]
  }

  userTypeChoices = [
    { text: 'Low voltage', value: 'LV' },
    { text: 'High tension', value: 'HT' },
    { text: 'Utility', value: 'UT' },
    { text: 'Power producer', value: 'PP' },
    { text: 'Superuser', value: 'SU' },
    { text: 'Not available', value: 'NA'}
  ]

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private mockService: MocksService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private loadingBar: LoadingBarService,
    private zone: NgZone
  ) {
    // console.log('constructor')
    this.loadData()
  }

  ngOnInit() {
    // console.log('ngOnInit')
    this.registerForm = this.formBuilder.group({
      username: new FormControl(''),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password1: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password2: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })

    this.updateForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      active: new FormControl(true),
      enabled: new FormControl(true),
      user_type: new FormControl('NA', Validators.compose([
        Validators.required
      ])),
      billing_address: new FormControl()
    })
  }

  getData() {
    this.loadData()
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    this.registerForm.reset()
    this.updateForm.reset()
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to create this new user?",
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
    // console.log('Register start')
    this.registerForm.controls['username'].setValue(this.registerForm.value.email)
    this.loadingBar.start()
    this.authService.registerAccount(this.registerForm.value).subscribe(
      () => {
        this.loadingBar.complete()
        // console.log('Register success')
      },
      () => {
        this.loadingBar.complete()
        // console.log('Register unsuccess')
      },
      () => {
        // console.log('Register after')
        this.update()
        // this.swalRegistered()
      }
    )
  }

  update() {
    // console.log('Update start')
    this.loadingBar.start()
    this.userService.update(this.authService.registeredID, this.updateForm.value).subscribe(
      () => {
        // console.log('Update success')
        this.loadingBar.complete()
      },
      () => {
        // console.log('Update unsuccess')
        this.loadingBar.complete()
      },
      () => {
        // console.log('Update after')
        this.swalRegistered()
        this.loadData()
      }
    )
  }

  loadData() {
    // console.log('Loading data')
    this.loadingBar.start()
    this.userService.get().subscribe(
      () => {
        this.users = this.userService.users
        this.tableRows = [...this.users]
        this.tableTemp = this.tableRows.map((prop, key) => {
          return {
            ...prop,
            id_index: key+1
          };
        });
        // console.log('Data loaded')
      },
      () => {
        this.loadingBar.complete()
      },
      () => {
        this.loadingBar.complete()
      }
    )
  }

  swalRegistered() {
    swal.fire({
      title: "Success",
      text: "A new user has been created!",
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
