import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmgsPage } from './cmgs.page';

const routes: Routes = [
  {
    path: '',
    component: CmgsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmgsPageRoutingModule {}
