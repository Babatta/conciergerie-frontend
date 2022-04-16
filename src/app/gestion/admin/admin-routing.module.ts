import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdAjouterComponent } from './ad-ajouter/ad-ajouter.component';
import { AdIndexComponent } from './ad-index/ad-index.component';
import { AdModifierComponent } from './ad-modifier/ad-modifier.component';
import { AdSupprimerComponent } from './ad-supprimer/ad-supprimer.component'; 

const routes: Routes = [
  {path: '', component: AdIndexComponent},
  {path : 'add', component: AdAjouterComponent},
  {path: 'edit/:id', component:AdModifierComponent},
  {path: 'delete/:id', component: AdSupprimerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
