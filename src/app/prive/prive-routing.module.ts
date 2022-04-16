import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlayoutComponent } from './alayout/alayout.component';
import { HomeComponent } from './administrateur/home/home.component';
import { TestComponent } from './test/test.component';
import { PagenotfoundComponent } from '../public/pagenotfound/pagenotfound.component';

const routes: Routes = [

  //{path: "home" , component: AlayoutComponent},
// {path: "", redirectTo:"home", pathMatch: "full"},
 

  {path: "", component: AlayoutComponent, children: [
   {path: "", redirectTo:"home", pathMatch: "full"},
   {path: "home" , component: DashboardComponent},
   {path: 'test' , component: TestComponent},
  
  
//   {
//     path: "abonne" , loadChildren: () =>  import('./abonne/abonne.module')
//     .then(m => m.AbonneModule)
//   },
//   // {
//   //   path: "administrateur" , loadChildren: () =>  import('./administrateur/administrateur.module')
//   //   .then(m => m.AdministrateurModule)
//   // } , 
 ]},
//   {path: "**",   pathMatch: "full",component: PagenotfoundComponent},  
//   {path: 'test' , component: TestComponent},
 
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriveRoutingModule { }
