import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GlayoutComponent } from './glayout/glayout.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TableaubordComponent } from './tableaubord/tableaubord.component';


@NgModule({
  declarations: [
    GlayoutComponent,
    SidemenuComponent,
    TableaubordComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule
  ],
  exports: [ 
    GlayoutComponent,
    SidemenuComponent,
    TableaubordComponent
  ],
})
export class GestionModule { }
