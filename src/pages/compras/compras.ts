import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoeProvider } from '../../providers/noe/noe';
import { DetalhePage } from '../detalhe/detalhe';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';


/**
* Generated class for the ComprasPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html',
})
export class ComprasPage {
  itens;
  constructor(public navCtrl: NavController, public navParams: NavParams,public noe: NoeProvider, public http: HttpClient, public alertCtrl: AlertController) {
  }

  ionViewWillEnter(){
    this.http.get<any>('http://localhost:3001/itenscompras').subscribe((res) => {
      for(let item of res){
        for(let opcao of item.opcoes){
          let preco = Number(opcao.preco.replace(',', '.'));
          let valorTotal = preco * opcao.quantidade;

          opcao.valorTotal = 'R$ ' + valorTotal.toFixed(2).replace('.',',');
        }
      }
      
      this.itens = res;
      console.log(this.itens)
    });
  }

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


  ionViewDidLoad() {
    console.log('ionViewDidLoad ComprasPage');
  }

  mudarStatus (opcao){
    
    let busca = {
      "clienteId": this.itens[0].clienteId,
      "ambiente":this.itens[0].ambiente,
      "tipo": this.itens[0].tipo,
      "modelo": opcao.modelo,
      "status": opcao.status
    }
    
    this.http.post('http://localhost:3001/updateitem', busca).subscribe(() => {
      this.http.get('http://localhost:3001/itenscompras').subscribe((res) => {
        this.itens = res;
      });
    });
  }

  irParaDetalhe (opcao){
    let parametros = {
      opcaoQueFoiClicado: opcao
    };
    
    console.log("Chamando nova API")
    // this.mudarStatus(this.parametros)
    
    
    this.navCtrl.push(DetalhePage, parametros );
  }
}
