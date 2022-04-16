import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdIndexComponent } from './ad-index/ad-index.component';
import { AdAjouterComponent } from './ad-ajouter/ad-ajouter.component';
import { AdModifierComponent } from './ad-modifier/ad-modifier.component';
import { AdSupprimerComponent } from './ad-supprimer/ad-supprimer.component';


@NgModule({
  declarations: [
    AdIndexComponent,
    AdAjouterComponent,
    AdModifierComponent,
    AdSupprimerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
