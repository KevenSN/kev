import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KevPageRoutingModule } from './kev-routing.module';

import { KevPage } from './kev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KevPageRoutingModule
  ],
  declarations: [KevPage]
})
export class KevPageModule {}
