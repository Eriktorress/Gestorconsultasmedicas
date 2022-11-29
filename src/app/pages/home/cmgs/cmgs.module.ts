import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CmgsPageRoutingModule } from './cmgs-routing.module';

import { CmgsPage } from './cmgs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CmgsPageRoutingModule
  ],
  declarations: [CmgsPage]
})
export class CmgsPageModule {}
