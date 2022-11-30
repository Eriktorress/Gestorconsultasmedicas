import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HousePage } from './house.page';

const routes: Routes = [
  {
    path: '',
    component: HousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousePageRoutingModule {}
