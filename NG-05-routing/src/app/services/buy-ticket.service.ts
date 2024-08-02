import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyTicketService {

  constructor() { }

  buyTicket(id: string | undefined, title: string | undefined) {
    console.log(`Ticket bought for ${title}!`);
  }
}
