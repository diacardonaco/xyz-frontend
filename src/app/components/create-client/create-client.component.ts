import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  createForm!: FormGroup;
  clientsObtained: Client[] | undefined;
  
  dataClient!: any;

  constructor(private fb: FormBuilder, private clientService: ClientService) {}

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    if (this.createForm && this.createForm.valid) {
      console.log("Submitting form: ", this.createForm.value);
      this.dataClient =  this.createForm.value;
      this.clientService.createClient(new Client(this.dataClient.id, this.dataClient.typeIdentification, this.dataClient.identification, 
        this.dataClient.name,  this.dataClient.city, this.dataClient.address, this.dataClient.phone)).subscribe(client => this.clientsObtained?.push(client));
    } else {
      console.error("Form is invalid!");
    }
  }

  private buildForm() {
    this.createForm = this.fb.group({
      id: ["", Validators.required],
      typeIdentification: ["", Validators.required],
      identification: ["", Validators.required],
      name: ["", Validators.required],
      city: ["", Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required]
    });
  }

}
