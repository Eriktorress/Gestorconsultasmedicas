import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfPage } from './perf.page';

const routes: Routes = [
  {
    path: '',
    component: PerfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfPageRoutingModule {}
