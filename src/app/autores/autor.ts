import { Sexo } from "./sexo.enum";

export class Autor {
    nome: String;
    dataNascimento:Date;
    sexo: Sexo

    constructor(nome:String,dataNascimento:Date,sexo:Sexo) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
    }
}
