import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorasPage } from './horas.page';

const routes: Routes = [
  {
    path: '',
    component: HorasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorasPageRoutingModule {}
