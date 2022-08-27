import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { ClientComponent } from './components/client/client.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{ path: 'consultClients', component: ClientsComponent }, 
                        { path: 'createClient', component: CreateClientComponent },
                        { path: 'createClient', component: ClientComponent },
                        { path: 'Home', component: HomeComponent}, 
                        { path: 'login', component: AppComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
