import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrosPageRoutingModule } from './livros-routing.module';

import { LivrosPage } from './livros.page';

import { HttpClientModule } from '@angular/common/http';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';




@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
    LivrosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [LivrosPage,LivrosCadastroComponent]
})
export class LivrosPageModule {}
