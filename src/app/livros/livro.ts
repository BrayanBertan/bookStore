import { Autor } from './../autores/autor';
export class Livro {

  id:number;
  titulo: String;
  isbn:String;
  numPaginas:number;
  autor:Autor;
  preco:number;
  capa:String;

  constructor(id:number,titulo:String,isbn:String,numPaginas:number,autor:Autor,preco:number,capa:String) {
      this.id = id;
      this.titulo = titulo;
      this.isbn = isbn;
      this.numPaginas = numPaginas;
      this.autor = autor;
      this.preco = preco;
      this.capa = capa;
  }
}
