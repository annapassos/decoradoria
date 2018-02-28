import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoeProvider } from '../../providers/noe/noe';
import { DetalhePage } from '../detalhe/detalhe';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ProjetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage {

  itens;
  constructor(public navCtrl: NavController, public navParams: NavParams,public noe: NoeProvider, public http: HttpClient, public alertCtrl: AlertController) {
  }

  ionViewWillEnter(){
    this.http.get<any>('http://localhost:3001/apiprojetos').subscribe((res) => {  
      this.itens = res;
      console.log(this.itens)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjetosPage');
  }


//   irParaDetalhe (opcao){
//     let parametros = {
//       opcaoQueFoiClicado: opcao
//     };
    
//     console.log("Chamando nova API")
//     // this.mudarStatus(this.parametros)
    
    
//     this.navCtrl.push(DetalhePage, parametros );
//   }
}
