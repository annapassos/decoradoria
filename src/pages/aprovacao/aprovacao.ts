import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoeProvider } from '../../providers/noe/noe';
import { DetalhePage } from '../detalhe/detalhe';
import { HttpClient } from '@angular/common/http';


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
  constructor(public navCtrl: NavController, public navParams: NavParams,public noe: NoeProvider, public http: HttpClient) {
   // itens
   this.http.get('http://localhost:3001/apiitens').subscribe(
     (res) => {
      this.itens = res;
      }
  )
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AprovacaoPage');
  }

  mudarStatus (){
    this.http.get('http://localhost:3001/apiitens').subscribe(
     (res) => {
      this.itens = res;
      }
  )

  }


  irParaDetalhe (opcao){
    let parametros = {
      opcaoQueFoiClicado: opcao
    };

  console.log("Chamando nova API")
  this.mudarStatus(this.parametros)


    this.navCtrl.push(DetalhePage, parametros );
  }
}
