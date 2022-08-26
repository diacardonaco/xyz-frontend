import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private client: Client | undefined;
 
  private getAllClientsUrl: string;

  constructor(private http: HttpClient) {
    this.getAllClientsUrl = 'http://localhost:8080/client/get-clients';
   }

  public getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.getAllClientsUrl);
  }
}
