import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { User } from 'src/app/shared/services/users/user.model';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.page.html',
  styleUrls: ['./profile-information.page.scss'],
})
export class ProfileInformationPage implements OnInit {

  // Data
  user: User

  constructor(
    private userService: UsersService,
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
    this.user = this.userService.user
  }

  edit(path: string, type: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(type)
      }
    }
    this.router.navigate([path], navigationExtras)
  }

}
