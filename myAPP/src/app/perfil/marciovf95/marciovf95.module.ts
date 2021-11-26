import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marciovf95PageRoutingModule } from './marciovf95-routing.module';

import { Marciovf95Page } from './marciovf95.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marciovf95PageRoutingModule
  ],
  declarations: [Marciovf95Page]
})
export class Marciovf95PageModule {}
