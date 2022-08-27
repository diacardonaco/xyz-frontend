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
  private createClientUrl: string;

  constructor(private http: HttpClient) {
    this.getAllClientsUrl = 'http://localhost:8080/client/get-clients';
    this.createClientUrl = 'http://localhost:8080/client/create-client';
   }

  public getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.getAllClientsUrl);
  }

  public createClient(client:Client): Observable<Client> {
    return this.http.post<Client>(this.createClientUrl, client)
  }
  
  public loginClient(username:String, password: String){
    if(username == 'user1' && password == '123'){
      return true;
    }else{
      return false;
    }
  }


}
