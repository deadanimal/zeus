import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
// import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // Form
  registerForm: FormGroup;
  registerFormMessages = {
    'name': [
      { type: 'required', message: 'Full name is required.' }
    ],
    'identification_number': [
      { type: 'required', message: 'IC number is required.' },
      { type: 'minlength', message: 'Enter a valid IC number.' }
    ],
    'mobile_number': [
      { type: 'required', message: 'Mobile number is required.' },
      { type: 'minlength', message: 'At least 10 characters long.' }
    ],
    'username': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid name.' }
    ],
    'password1': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'At least 6 characters long.' }
    ],
    'password2': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'At least 6 characters long.' }
    ]
  };

  // Checker
  isLoading: boolean = false

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router,
    // private toastr: NotifyService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      identification_number: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(12)
      ])),
      mobile_number: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])),
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password1: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      password2: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  register() {
    this.isLoading = true
    this.authService.registerAccount(this.registerForm.value).subscribe(
      (res) => {
        // Success
        this.isLoading = false
        console.log(res);
        this.userService.update(res.user.pk, this.registerForm.value).subscribe(
          (res) => {
            console.log(res);
          }, (err) => {
            console.error(err);
          }
        )
      },
      (err) => {
        // Failed
        this.isLoading = false;
        console.error(err);
      },
      () => {
        // After
        // this.toastr.openToastr('Successfully registered your account')
        this.showAlert()
      }
    )
  }

  navigatePage() {
    this.router.navigate(['core/dashboard'])
  }

  showAlert() {

    this.alertController.create({
      mode:'ios',
      header: 'Register account',
      message: 'Successfully registered your account. Please log in into your account.',
      buttons: [{text:'Log in',
      handler: () => {
        this.navigatePage();
      }
      }]
    }).then(res => {

      res.present();
    });
  }

  

}
