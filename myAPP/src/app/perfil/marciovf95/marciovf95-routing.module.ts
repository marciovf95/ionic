import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marciovf95Page } from './marciovf95.page';

const routes: Routes = [
  {
    path: '',
    component: Marciovf95Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marciovf95PageRoutingModule {}
