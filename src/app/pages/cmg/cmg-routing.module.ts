import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmgPage } from './cmg.page';

const routes: Routes = [
  {
    path: '',
    component: CmgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmgPageRoutingModule {}
