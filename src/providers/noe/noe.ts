import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NoeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoeProvider {
  itens = [];

  aprovados = [];

  acesso = false;

  inserirItensServico(item){
   this.itens.push(item);
   console.log(this.itens);  
 }

 inserirAprovado(aprovado){
   this.aprovados.push(aprovado);
   console.log(this.aprovados)
 }

 acessoPermitido(){
  this.acesso = true;
 }

}
