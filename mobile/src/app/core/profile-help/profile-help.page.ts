import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/shared/services/tickets/tickets.service';
import { Ticket } from 'src/app/shared/services/tickets/tickets.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-help',
  templateUrl: './profile-help.page.html',
  styleUrls: ['./profile-help.page.scss'],
})
export class ProfileHelpPage implements OnInit {

  // Icon
  iconSpeech = 'assets/img/settings/speech-bubble.svg'

  // Data
  tickets: Ticket[] = []

  constructor(
    private ticketService: TicketsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

  getData() {
    this.tickets = this.ticketService.ticketsFiltered
  }

}
