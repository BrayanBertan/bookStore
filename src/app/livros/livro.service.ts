import { Livro } from './livro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private url = 'http://localhost:3000/livros';
  constructor(
    private httpCliente:HttpClient
  ) {

  }

   public  getLivros(): Observable<Livro[]>{
    return this.httpCliente.get<Livro[]>(this.url);
  }

  public removeLivro(livro:Livro){
    return this.httpCliente.delete(`${this.url}/${livro.id}`);
  }

  public getLivro(id:number):  Observable<Livro>{
      return  this.httpCliente.get<Livro>(`${this.url}/${id}`);
  }


  adicionar(livro: Livro) {
     return this.httpCliente.post(`${this.url}`,livro);

  }

  atualizar(livro: Livro) {
  return this.httpCliente.put(`${this.url}/${livro.id}`,livro);

  }

  salvar(livro: Livro){
    if(livro.id)
      return this.atualizar(livro);
    else
    return this.adicionar(livro);
  }
}
