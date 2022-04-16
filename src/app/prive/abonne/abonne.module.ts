import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbonneRoutingModule } from './abonne-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AbonneRoutingModule
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    HomeComponent
   ],
})
export class AbonneModule { }
