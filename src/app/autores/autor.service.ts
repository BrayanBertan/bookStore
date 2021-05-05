import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from './autor';
import { Sexo } from './sexo.enum';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private url = 'http://localhost:3000/autores';
  private autores: Autor[];
  constructor(
    private httpCliente:HttpClient
  ) {

  }

   public  getAutores(): Observable<Autor[]>{
    return this.httpCliente.get<Autor[]>(this.url);
  }

  public removeAutor(autor:Autor){
    return this.httpCliente.delete(`${this.url}/${autor.id}`);
  }

  public getAutor(id:Autor | number):  Observable<Autor>{
      return  this.httpCliente.get<Autor>(`${this.url}/${id}`);
  }




  adicionar(autor: Autor) {
     return this.httpCliente.post(`${this.url}`,autor);

  }

  atualizar(autor: Autor) {
  return this.httpCliente.put(`${this.url}/${autor.id}`,autor);

  }

  salvar(autor: Autor){
    if(autor.id)
      return this.atualizar(autor);
    else
    return this.adicionar(autor);
  }
}