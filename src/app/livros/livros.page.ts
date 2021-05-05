import { AutorService } from './../autores/autor.service';
import { LivroService } from './livro.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.page.html',
  styleUrls: ['./livros.page.scss'],
})
export class LivrosPage implements OnInit {

  livros:Livro[];

  constructor(
    private alertController: AlertController,
    private toastController:ToastController,
    private livroService:LivroService,
    private autorService:AutorService) {
    this.refreshLivros();
  }

  ngOnInit() {
  }

  async removeConfirm(livro:Livro){
    await this.alertController.create({
      header:'Confirmação de exclusão',
      message:`Desenha excluir o livro ${livro.titulo}`,
      buttons:[{
        text:'Sim',
        cssClass:'ion-color-success',
        handler:() => {
          this.remove(livro);
        }
      },{
        text:'Não',
        cssClass:'ion-color-danger',
      }]
    }).then(alert => alert.present());
  }


  remove(livro:Livro) {
    this.livroService.removeLivro(livro).subscribe(
      (value)=> this.refreshLivros(),
      (error)=> {
        this.toastController.create({
          message: 'Não foi possivel excluir o livro',
          duration: 5000,
          keyboardClose: true,
          color:'danger'
        }).then(
          t => t.present()
        )}
    );
  }
  refreshLivros(){
     this.livroService.getLivros().subscribe(
      (value)=> {
        this.livros = value;
        this.livros.forEach(livro => {
           this.autorService.getAutor(livro.autor).subscribe(
            (value)=>livro.autor = value
          );
        });
        console.log(this.livros);
      },
      (error)=> console.error(error),
    );
    console.log(this.livros);
  }

  ionViewWillEnter(){
    this.refreshLivros();
  }
}