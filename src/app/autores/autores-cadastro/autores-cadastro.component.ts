import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Autor } from '../autor';
import { AutorService } from '../autor.service';
import { Sexo } from '../sexo.enum';

@Component({
  selector: 'app-autores-cadastro',
  templateUrl: './autores-cadastro.component.html',
  styleUrls: ['./autores-cadastro.component.scss'],
})
export class AutoresCadastroComponent implements OnInit {
 // autor: Autor;
  mesesAbreviados = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];
  meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  autorId: number;
  autoresForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private autorService: AutorService,
    private router: Router,
  ) {

    let autor={
      id:null,
      nome:'',
      dataNascimento:null,
      sexo:Sexo.MASCULINO
    };
    this.initializaFormulario(autor);

  }

  initializaFormulario(autor:Autor){
    this.autoresForm = new FormGroup({
      nome: new FormControl(autor.nome, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150)
      ]),

      dataNascimento: new FormControl(autor.dataNascimento),

      sexo: new FormControl(autor.sexo, Validators.required)
    })
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if(id){
      this.autorId = id;
      this.autorService
        .getAutor(id)
        .subscribe((autor) => this.initializaFormulario(autor)
        );
    }

  }


  salvar() {
    const autor = {...this.autoresForm.value, id: this.autorId}
    this.autorService.salvar(autor).subscribe(
      value => this.router.navigate(['autores']),
      erro => {
        console.error(erro);
        this.toastController.create({
          message: `Não foi possível salvar o autor ${autor.nome}`,
          duration: 5000,
          keyboardClose: true,
          color: 'danger'
        }).then(t => t.present());
      }
   );

  }

  get nome() {
    return this.autoresForm.get('nome');
  }
}
