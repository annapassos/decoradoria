import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoeProvider } from '../../providers/noe/noe';
import { DetalhePage } from '../detalhe/detalhe';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the AprovacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aprovacao',
  templateUrl: 'aprovacao.html',
})
export class AprovacaoPage {
  itens;
  constructor(public navCtrl: NavController, public navParams: NavParams,public noe: NoeProvider, public http: HttpClient, public alertCtrl: AlertController) {
   // itens
   this.http.get('http://localhost:3001/apiitens').subscribe(
     (res) => {
      this.itens = res;
      }
  )
}

showConfirm(opcao) {
  let confirm = this.alertCtrl.create({
    title: 'Você confirma?',
    message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
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
    console.log('ionViewDidLoad AprovacaoPage');
  }

  mudarStatus (opcao){

    let busca = {
        "clienteId": this.itens[0].clienteId,
        "ambiente":this.itens[0].ambiente,
        "tipo": this.itens[0].tipo,
        "modelo": opcao.modelo
       }
    this.http.post('http://localhost:3001/updateitem', busca).subscribe(() => {
        alert('Item Aprovado!');
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
