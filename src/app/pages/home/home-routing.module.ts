import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'house',
        loadChildren: () => import('./../../pages/house/house.module').then( m => m.HousePageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./../../pages/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      {
        path: 'horas',
        loadChildren: () => import('./../../pages/horas/horas.module').then( m => m.HorasPageModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./../../pages/maps/maps.module').then( m => m.MapsPageModule)
      },

    ]
    
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
