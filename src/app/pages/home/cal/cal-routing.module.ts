import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalPage } from './cal.page';

const routes: Routes = [
  {
    path: '',
    component: CalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalPageRoutingModule {}
