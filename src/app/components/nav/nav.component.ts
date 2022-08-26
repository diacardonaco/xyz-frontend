import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['/', 'consultHome']);
  }
  
  goToCreateClient() {
    this.router.navigate(['/', 'createClient']);
  }

  goToConsultClients() {
    this.router.navigate(['/', 'consultClients']);
  }

}
