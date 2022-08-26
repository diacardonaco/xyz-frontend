import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { ClientsComponent } from './components/clients/clients.component';

const routes: Routes = [{ path: 'consultClients', component: ClientsComponent }, { path: 'createClient', component: ClientComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
