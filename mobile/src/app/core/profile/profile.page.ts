import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/services/users/users.model';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // Data
  user: User

  // Language
  // selectedLanguage: string
  // languageTypes = [
  //   { value: 'en', text: 'English' },
  //   { value: 'bm', text: 'Bahasa Malaysia' }
  // ]

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private jwtService: JwtService,
    private router: Router
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

  getData() {
    this.userService.getOne(this.authService.userID).subscribe(
      () => { this.user = this.userService.user },
      () => {},
      () => {}
    )
  }

  logout() {
    this.jwtService.destroyToken()
    this.navigatePage('/')
  }

}
