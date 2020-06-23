import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/services/users/user.model';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-profile-information-edit',
  templateUrl: './profile-information-edit.page.html',
  styleUrls: ['./profile-information-edit.page.scss'],
})
export class ProfileInformationEditPage implements OnInit {

  // Form
  userForm: FormGroup

  // Data
  user: User
  formType: string = 'name'
  
  // Checker
  isLoading: boolean = false

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notify: NotifyService,
    private router: Router
  ) {
    this.getData()
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        if (params && params.special) {
          this.formType = JSON.parse(params.special)
          // console.log(this.formType)
        }
      }
    )
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: new FormControl(this.user.name, Validators.compose([
        Validators.required
      ])),
      billing_address: new FormControl(this.user.billing_address, Validators.compose([
        Validators.required
      ]))
    })
  }

  update() {
    this.isLoading = true
    this.userService.update(this.user.id, this.userForm.value).subscribe(
      () => {
        this.isLoading = false
      },
      () => {
        this.isLoading = false
      },
      () => {
        this.notify.openToastr('Successfully updated information')
        this.userForm.reset()
        this.navigatePage('/core/profile')
      }
    )
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

  getData() {
    this.user = this.userService.user
  }


}
