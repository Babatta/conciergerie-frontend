import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AgenceComponent } from './agence/agence.component';
import { ServicesComponent } from './services/services.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { ContactComponent } from './contact/contact.component';
import { EvenementsComponent } from './services/evenements/evenements.component';
import { PublicRoutingModule } from './public-routing.module';
import { TourismeComponent } from './services/tourisme/tourisme.component';
import { PlayoutComponent } from './playout/playout.component';
import { PheaderComponent } from './pheader/pheader.component';
import { PfooterComponent } from './pfooter/pfooter.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterClientComponent } from './register-client/register-client.component';



@NgModule({
  declarations: [
    HomeComponent,
    AgenceComponent,
    ServicesComponent,
    AbonnementComponent,
    ContactComponent,
    EvenementsComponent,
    TourismeComponent,
    PlayoutComponent,
    PheaderComponent,
    PfooterComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    RegisterClientComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
      HomeComponent,
      AgenceComponent,
      ServicesComponent,
      AbonnementComponent,
      ContactComponent,
      EvenementsComponent,
      TourismeComponent,
      PlayoutComponent,
      PheaderComponent,
      PfooterComponent,
      LoginComponent,
      RegisterComponent
  ],
})
export class PublicModule { }
