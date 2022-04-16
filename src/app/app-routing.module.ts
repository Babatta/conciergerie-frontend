import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { PagenotfoundComponent } from './public/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: "", loadChildren: () =>import('./public/public.module')
            .then(m => m.PublicModule)
  },  
   
  {path: "prive", loadChildren: () =>import('./prive/prive.module')
            .then(m => m.PriveModule)
  },
  {path: "gest", loadChildren: () =>import('./gestion/gestion.module')
            .then(m => m.GestionModule)
  },
  {path: "**",   pathMatch: "full",component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
