import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPessoaPageRoutingModule } from './dados-pessoa-routing.module';

import { DadosPessoaPage } from './dados-pessoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPessoaPageRoutingModule
  ],
  declarations: [DadosPessoaPage]
})
export class DadosPessoaPageModule {}
