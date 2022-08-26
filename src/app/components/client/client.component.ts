import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() client: Client = {

    id: 0,
    typeIdentification: '',
    identification: '',
    name: '',
    city:'',
    address: '',
    phone: ''
  }

  clientsObtained: Client[] | undefined;


  constructor(private clientService: ClientService) {
   }

  ngOnInit(): void {
     this.clientService.getAllClients().subscribe(e =>this.clientsObtained=e);
  }

}
