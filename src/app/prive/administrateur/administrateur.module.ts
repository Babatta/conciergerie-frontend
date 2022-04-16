import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrateurRoutingModule } from './administrateur-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdministrateurRoutingModule
  ]
})
export class AdministrateurModule { }
