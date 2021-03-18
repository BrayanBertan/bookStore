import { Sexo } from "./sexo.enum";

export class Autor {
    id:number;
    nome: String;
    dataNascimento:Date;
    sexo: Sexo

    constructor(id:number,nome:String,dataNascimento:Date,sexo:Sexo) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
    }
}
