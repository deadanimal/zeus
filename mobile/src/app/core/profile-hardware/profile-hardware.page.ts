import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Registration } from './../../shared/services/auth/auth.model';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';


@Component({
  selector: 'app-profile-hardware',
  templateUrl: './profile-hardware.page.html',
  styleUrls: ['./profile-hardware.page.scss'],
})


export class ProfileHardwarePage implements OnInit {

  // Form
  userForm: FormGroup
  // auth: Registration

  // Checker
  isLoading: boolean = false

  constructor(     
    private fb: FormBuilder,
    private authService: AuthService, // Sini
    private notify: NotifyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      new_password1: new FormControl(),
      new_password2: new FormControl()
    })
  }

  updated() {
    this.isLoading = true
    // this.authService.change

    this.authService.changePassword(this.userForm.value).subscribe(
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
  
  connect() {

  }

}
