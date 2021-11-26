import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosPessoaPage } from './dados-pessoa.page';

const routes: Routes = [
  {
    path: '',
    component: DadosPessoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosPessoaPageRoutingModule {}
