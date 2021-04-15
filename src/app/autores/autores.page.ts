import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Autor } from './autor';
import { AutorService } from './autor.service';
import { Sexo } from './sexo.enum';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {
autores:Autor[];

  constructor(
    private alertController: AlertController,
    private toastController:ToastController,
    private autorService:AutorService) { 
    this.refreshAutores();
  }

  ngOnInit() {
  }

  async removeConfirm(autor:Autor){
    await this.alertController.create({
      header:'Confirmação de exclusão',
      message:`Desenha excluir o autor ${autor.nome}`,
      buttons:[{
        text:'Sim',
        cssClass:'ion-color-success',
        handler:() => {
          this.remove(autor);
        }
      },{
        text:'Não',
        cssClass:'ion-color-danger',
      }]
    }).then(alert => alert.present());
  }


  remove(autor:Autor) {
    this.autorService.removeAutor(autor).subscribe(
      (value)=> this.refreshAutores(),
      (error)=> {
        this.toastController.create({
          message: 'Não foi possivel excluir o autor',
          duration: 5000,
          keyboardClose: true,
          color:'danger'
        }).then(
          t => t.present()
        )}
    );
  }
  refreshAutores(){
     this.autorService.getAutores().subscribe(
      (value)=> this.autores = value,
      (error)=> console.error(error),
    );
  }

}
