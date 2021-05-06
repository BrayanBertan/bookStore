import { AutorService } from './../../autores/autor.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LivroService } from './../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Livro } from '../livro';
import { Autor } from 'src/app/autores/autor';

@Component({
  selector: 'app-livros-cadastro',
  templateUrl: './livros-cadastro.component.html',
  styleUrls: ['./livros-cadastro.component.scss'],
})
export class LivrosCadastroComponent implements OnInit {

  livroId: number;
  livrosForm: FormGroup;
  autores:Autor[];
  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private livroService: LivroService,
    private autorService: AutorService,
    private router: Router,
  ) {

    let livro={
      id:null,
      titulo:'',
      isbn:'',
      numPaginas:0,
      autor:null,
      preco:0.0,
      capa:'https://image.freepik.com/vetores-gratis/desenho-de-escola-de-pilha-de-livros-dos-desenhos-animados_24877-17357.jpg'
    };
    this.getAutores();
    this.initializaFormulario(livro);

  }


  get titulo() {
    return this.livrosForm.get('titulo');
  }
  get isbn() {
    return this.livrosForm.get('isbn');
  }
  get numPaginas() {
    return this.livrosForm.get('numPaginas');
  }
  get preco() {
    return this.livrosForm.get('preco');
  }
  get capa() {
    return this.livrosForm.get('capa');
  }

  initializaFormulario(livro:Livro){
    this.livrosForm = new FormGroup({

      titulo: new FormControl(livro.titulo, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150)
      ]),

      isbn: new FormControl(livro.isbn, [
        Validators.required
      ]),

      numPaginas: new FormControl(livro.numPaginas, [
        Validators.required
      ]),

      preco: new FormControl(livro.preco, [
        Validators.required
      ]),

      autor: new FormControl(livro.autor),

      capa: new FormControl(livro.capa, [
        Validators.required
      ])
    })
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if(id){
      this.livroId = id;
      this.livroService
        .getLivro(id)
        .subscribe((livro) => this.initializaFormulario(livro)
        );
    }

  }


  salvar() {
    const livro = {...this.livrosForm.value, id: this.livroId}
    this.livroService.salvar(livro).subscribe(
      value => this.router.navigate(['livros']),
      erro => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar o livro ${livro.nome}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
   );

  }

  getAutores(){
    this.autorService.getAutores().subscribe(
     (value)=> {
       this.autores = value;
     },
     (error)=> console.error(error),
   );
 }

}
