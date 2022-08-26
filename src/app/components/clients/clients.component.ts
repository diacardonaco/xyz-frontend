import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {


  clientsObtained: Client[] | undefined;


  constructor(private clientService: ClientService) {
   }

  ngOnInit(): void {
     this.clientService.getAllClients().subscribe(e =>this.clientsObtained=e);
  }

}
