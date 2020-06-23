import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // Form
  registerForm: FormGroup;
  registerFormMessages = {
    'username': [
      { type: 'required', message: 'Name is required.' },
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
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: NotifyService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
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
      () => {
        // Success
        this.isLoading = false
      },
      () => {
        // Failed
        this.isLoading = false
      },
      () => {
        // After
        this.toastr.openToastr('Successfully registered your account')
      }
    )
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

}
