import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { FormGroup } from '@angular/forms';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  public navParams = new NavParams();

  // Form
  loginForm: FormGroup;
  value:any;

  // Checker
  isLoading: boolean = false

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private toastr: NotifyService,
    private router: Router,
  ) {
    this.value = this.navParams.get('value');;
   }

  ngOnInit() {
  }

  login() {
    this.isLoading = true
    // console.log(this.loginForm.value)
    this.authService.obtainToken(this.loginForm.value).subscribe(
      () => {
        // Success
        // this.isLoading = false
      },
      () => {
        // Failed
        this.isLoading = false
      },
      () => {
        // After
        this.getSelf()
      }
    )
  }

  getSelf() {
    this.userService.getOne(this.authService.userID).subscribe(
      () => {},
      () => { this.isLoading = false },
      () => {
        this.isLoading = false
        this.toastr.openToastr('Welcome back')
        this.navigateHomePage()
      }
    )
  }

  navigateHomePage() {
    this.router.navigate(['/core/dashboard'], {
      replaceUrl: true
    })
  }

}
