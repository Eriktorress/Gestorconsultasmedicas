import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialistasPage } from './especialistas.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialistasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialistasPageRoutingModule {}
