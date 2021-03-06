import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosPage } from './livros.page';

const routes: Routes = [
  {
    path: '',
    component: LivrosPage
  },
  {
    path: 'edicao/:id',
    component: LivrosCadastroComponent
  },

  {
    path: 'cadastro',
    component: LivrosCadastroComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosPageRoutingModule {}
