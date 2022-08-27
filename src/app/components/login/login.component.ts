import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  clientsObtained: Client[] | undefined;
  element: boolean | undefined = true;
  
  dataClient!: any;

  constructor(private fb: FormBuilder, private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    if (this.loginForm && this.loginForm.valid) {
      console.log("Submitting form: ", this.loginForm.value);

      this.dataClient =  this.loginForm.value;
      
      if (this.clientService.loginClient(this.dataClient.username, this.dataClient.password)){
        this.element = false;
        this.router.navigate(['/', 'Home']);
      }else{
        alert('Acces Denied.')
      }


    } else {
      console.error("Form is invalid!");
    }
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

}
