import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorasPageRoutingModule } from './horas-routing.module';

import { HorasPage } from './horas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorasPageRoutingModule
  ],
  declarations: [HorasPage]
})
export class HorasPageModule {}
