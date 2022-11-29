import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfPageRoutingModule } from './perf-routing.module';

import { PerfPage } from './perf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfPageRoutingModule
  ],
  declarations: [PerfPage]
})
export class PerfPageModule {}
