import { Injectable } from '@angular/core';
import { Autor } from './autor';
import { Sexo } from './sexo.enum';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private autores: Autor[];
  constructor() { 
    this.autores = [
      new Autor(1,'Nome',new Date(1980,5,20),Sexo.MASCULINO),
      new Autor(2,'aaaa',new Date(1980,5,20),Sexo.FEMININO),
      new Autor(3,'xd',new Date(1980,5,20),Sexo.MASCULINO),
     ];
  }

  public  getAutores():Autor[]{
    return this.autores;
  }

  public removeAutor(autor:Autor){
    this.autores = this.autores.filter(item => item.id !== autor.id);
  }

  public getAutor(id:number): Autor{
      return this.autores.find(a => a.id === id);
  }
}
