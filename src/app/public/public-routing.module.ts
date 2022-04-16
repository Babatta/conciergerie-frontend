import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgenceComponent } from './agence/agence.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { EvenementsComponent } from './services/evenements/evenements.component';
import { TourismeComponent } from './services/tourisme/tourisme.component';
import { PlayoutComponent } from './playout/playout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { HeaderComponent } from '../prive/abonne/header/header.component';
import { OkComponent } from '../ok/ok.component';

const routes: Routes = [

  {path: "", component: PlayoutComponent, children: [
  {path: "", redirectTo:"accueil", pathMatch: "full"},
  {path: "accueil" , component: HomeComponent},
  {path: "agence" , component: AgenceComponent},
  {path: "contact", component: ContactComponent},
  {path: "services", component:ServicesComponent},
  {path: "evenements", component: EvenementsComponent},
  {path: "tourisme", component: TourismeComponent},
  {path: "login", component: LoginComponent},
  {path: "register-client", component: RegisterClientComponent},
  {path: "register-pres", component: RegisterComponent}
 
]},
{path: "priveabonne", component: HeaderComponent}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
