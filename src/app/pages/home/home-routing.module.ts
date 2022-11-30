import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'perfil',
        loadChildren: () => import('./../../pages/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./../../pages/maps/maps.module').then( m => m.MapsPageModule)
      },
      {
        path: 'horas',
        loadChildren: () => import('./../../pages/horas/horas.module').then( m => m.HorasPageModule)
      },
      {
        path: 'cmg',
        loadChildren: () => import('./../../pages/cmg/cmg.module').then( m => m.CmgPageModule)
      },
    ]
    
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
