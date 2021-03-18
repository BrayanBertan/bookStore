import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autor } from '../autor';
import { AutorService } from '../autor.service';
import { Sexo } from '../sexo.enum';

@Component({
  selector: 'app-autores-cadastro',
  templateUrl: './autores-cadastro.component.html',
  styleUrls: ['./autores-cadastro.component.scss'],
})
export class AutoresCadastroComponent implements OnInit {
  autor:Autor;
  constructor(private activateRoute:ActivatedRoute,private autorService: AutorService) {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if(id){
        this.autor = this.autorService.getAutor(parseInt(id));
    }else{
      this.autor = new Autor(null,'',new Date(),Sexo.MASCULINO);
    }
   }

  ngOnInit() {}

}
