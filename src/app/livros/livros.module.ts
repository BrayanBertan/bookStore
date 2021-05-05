import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrosPageRoutingModule } from './livros-routing.module';

import { LivrosPage } from './livros.page';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  imports: [
    CommonModule,  
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule ,
    LivrosPageRoutingModule
  ],
  declarations: [LivrosPage]
})
export class LivrosPageModule {}
