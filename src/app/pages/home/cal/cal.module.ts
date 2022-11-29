import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalPageRoutingModule } from './cal-routing.module';

import { CalPage } from './cal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalPageRoutingModule
  ],
  declarations: [CalPage]
})
export class CalPageModule {}
