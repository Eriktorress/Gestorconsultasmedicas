import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'cmgs',
    loadChildren: () => import('./cmgs/cmgs.module').then( m => m.CmgsPageModule)
  },
  {
    path: 'perf',
    loadChildren: () => import('./perf/perf.module').then( m => m.PerfPageModule)
  },
  {
    path: 'cal',
    loadChildren: () => import('./cal/cal.module').then( m => m.CalPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
