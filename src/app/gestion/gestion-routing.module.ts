import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableaubordComponent } from './tableaubord/tableaubord.component';
import { GlayoutComponent } from './glayout/glayout.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

const routes: Routes = [
  {path: '',component : GlayoutComponent, children:[
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: TableaubordComponent},
  {path: 'menu', component:SidemenuComponent},
  
  {
      path:'admin', loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  }
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
