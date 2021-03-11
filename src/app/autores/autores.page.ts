import { Component, OnInit } from '@angular/core';
import { Autor } from './autor';
import { Sexo } from './sexo.enum';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {
autores:Autor[];

  constructor() { 
    this.autores = [
     new Autor('Nome',new Date(1980,5,20),Sexo.MASCULINO),
     new Autor('aaaa',new Date(1980,5,20),Sexo.FEMININO),
     new Autor('xd',new Date(1980,5,20),Sexo.MASCULINO),
    ];
  }

  ngOnInit() {
  }

}
