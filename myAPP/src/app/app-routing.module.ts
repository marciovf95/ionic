import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'marciovf95',
    loadChildren: () => import('./perfil/marciovf95/marciovf95.module').then( m => m.Marciovf95PageModule)
  },
  {
    path: 'dados-pessoa',
    loadChildren: () => import('./dados-pessoa/dados-pessoa.module').then( m => m.DadosPessoaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
