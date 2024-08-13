import { Component, OnInit } from '@angular/core';
import { GuestResponsesService } from 'src/app/services/guest-responses.service';
import GuestResponse from 'src/app/interfaces/GuestResponse';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  responses: GuestResponse[] = [];

  constructor(private guestResponsesService: GuestResponsesService) {}

  ngOnInit() {
    this.getResponses(); // Llama a la función al inicializar el componente
  }

  getResponses() {
    this.guestResponsesService.getGuestResponses().subscribe((data) => {
      this.responses = data;
      console.log(this.responses); // Puedes verificar los datos que obtuviste
    });
  }
}
