import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DetalhePage } from '../detalhe/detalhe';
import { ComprasPage } from '../compras/compras';
import { EditarPage } from '../editar/editar';

/**
* Generated class for the AprovadosPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-aprovados',
  templateUrl: 'aprovados.html',
})
export class AprovadosPage {
  itens;
  clientes;
  dados = {
    clienteId: ''
  };

  valorFinal:any = 0;
  valorFinal2 = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    

    //   this.http.get('http://localhost:3001/apiitens').subscribe(
    //   (res) => {
    //     this.itens = res;
    //   }
    // )
    
    this.http.get('http://localhost:3001/apiclientes').subscribe((cadastro) => {
    this.clientes = cadastro;
  });
}

// buscar itens aprovados:


buscarAprovados (opcao){
  let busca = {
    "clienteId": this.dados.clienteId,
    "status": "aprovado"
  }
  
  this.http.post<any>('http://localhost:3001/itensaprovados', busca).subscribe((dados) => {
    for(let item of dados){
      if(!item.opcoes) continue;
      
      for(let opcao of item.opcoes){
        let preco = Number(opcao.preco.replace(',', '.'));
        let valorTotal = preco * opcao.quantidade;

        opcao.valorTotal = 'R$ ' + valorTotal.toFixed(2).replace('.',',');
        this.valorFinal = valorTotal + this.valorFinal;
        
      }
    }
    this.itens = dados;  
    console.log(this.itens)
    this.valorFinal = 'R$ ' + this.valorFinal.toFixed(2).replace('.',',');
  });

}


// irParaDetalheProjeto (opcao){
//   let parametros = {
//     opcaoQueFoiClicado: opcao
//   };
  
  
//   this.navCtrl.push(DetalheprojeoPage, parametros );
// }


irParaEditar (opcao){
  let parametros = {
    opcaoQueFoiClicado: opcao
  };
  
  
  this.navCtrl.push(EditarPage, parametros );
}

ionViewDidLoad() {
  console.log('ionViewDidLoad AprovadosPage');
}

}


