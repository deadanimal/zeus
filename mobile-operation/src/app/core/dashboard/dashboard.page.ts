import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // Logo
  imgLogo = 'assets/red.png';

  constructor() { }

  ngOnInit() {
  }

}
