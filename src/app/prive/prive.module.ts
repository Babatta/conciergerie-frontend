import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbonneModule } from './abonne/abonne.module';
import { PriveRoutingModule } from './prive-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrateurModule } from './administrateur/administrateur.module';
import { AdministrateurRoutingModule } from './administrateur/administrateur-routing.module';
import { TestComponent } from './test/test.component';
import { AbonneRoutingModule } from './abonne/abonne-routing.module';


@NgModule({
  declarations: [
    AlayoutComponent,
    DashboardComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    PriveRoutingModule,
    AbonneModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AdministrateurRoutingModule,
    // AbonneRoutingModule
    
  ],
  exports: [ 
    AlayoutComponent,
    DashboardComponent,
    TestComponent


  ],
})
export class PriveModule { }
