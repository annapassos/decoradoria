import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoeProvider } from '../../providers/noe/noe';
import { DetalhePage } from '../detalhe/detalhe';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
  itens;
  opcao;
  constructor(public navCtrl: NavController, public navParams: NavParams,public noe: NoeProvider, public http: HttpClient, public alertCtrl: AlertController) {
    this.opcao = this.navParams.get ('opcaoQueFoiClicado');
  }


  ionViewWillEnter(){
    let busca = {
      "ambiente": this.opcao.ambiente,
      "tipo": this.opcao.tipo,
      "clienteId": this.opcao.clienteId
    }
    
    this.http.post<any>('http://localhost:3001/itenseditados', busca).subscribe((dados) => {
      for(let item of dados){
        for(let opcao of item.opcoes){
          let preco = Number(opcao.preco.replace(',', '.'));
          let valorTotal = preco * opcao.quantidade;
  
          opcao.valorTotal = 'R$ ' + valorTotal.toFixed(2).replace('.',',');
        }
      }
      
      this.itens = dados;  
      // console.log(this.itens)
    });
  }

  // Função Buscar Intens para Editar

 


  // Botão de confirmação da mudança

  showConfirm(opcao) {
    let confirm = this.alertCtrl.create({
      title: 'Você confirma a escolha?',
      message: 'O item escolhido será movido para a aba Aprovados',
      buttons: [
        {
          text: 'Cancela',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirma',
          handler: () => {
            this.mudarStatus(opcao);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


    // Função de mudar status

  mudarStatus (opcao){
    
    let busca = {
      "clienteId": opcao.clienteId,
      "ambiente":opcao.ambiente,
      "tipo": opcao.tipo,
      "modelo": opcao.modelo,
      "status": opcao.status
    }
    
    this.http.post('http://localhost:3001/updateitem', busca).subscribe(() => {
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPage');
    console.log(this.opcao)
  }
}
