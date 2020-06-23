import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/shared/services/bills/bills.model';
import { BillsService } from 'src/app/shared/services/bills/bills.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.page.html',
  styleUrls: ['./bills.page.scss'],
})
export class BillsPage implements OnInit {

  // Data
  bills: Bill[] = []

  // Icon
  iconError = 'assets/img/default/404-error.svg'
  
  // Checker
  isListEmpty: boolean = true

  constructor(
    private billService: BillsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  getData() {
    
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

}
