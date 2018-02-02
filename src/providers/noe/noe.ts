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
  orcamentos = [
    {
      titulo:"",
      opcoes: []  
    }
  ];

  // orcamentos[i]

  inserirItensServico(item){

    this.itens.push(item);
    console.log("itens =");
    console.log(this.itens);
  
    let tipoExistente = false;
    
    for (let i = 0; i < this.orcamentos.length; i++) {
  
      if (this.itens[this.itens.length-1].tipo === this.orcamentos[i].titulo){
        this.orcamentos[i].opcoes.push(this.itens[this.itens.length-1]); 
        tipoExistente = true;
      }
    }
  
    if ((tipoExistente === false) && (this.orcamentos[0].titulo !== "")){
      this.orcamentos.push({titulo: "", opcoes: []});      
      this.orcamentos[this.orcamentos.length-1].opcoes.push(this.itens[this.itens.length-1]);
      this.orcamentos[this.orcamentos.length-1].titulo = this.itens[this.itens.length-1].tipo;
      }
    
    else if ((tipoExistente === false) && (this.orcamentos[0].titulo === "")){
      this.orcamentos[0].opcoes.push(this.itens[this.itens.length-1]);
      this.orcamentos[0].titulo = this.itens[this.itens.length-1].tipo;
    }
    console.log("orcamentos =");
    console.log(this.orcamentos)
  }
  
  }
  


