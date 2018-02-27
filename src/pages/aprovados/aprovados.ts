import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


// // VERIFICAR FILTRA O QUE FOI APROVADO

// getItems(ev: any) {
//   if (ev.target.value == ""){
//     this.itensselecionados = this.items;
//   } else {
//     this.itensselecionados=[];
//     for(let item of this.items){
//       if (item.nome.search(ev.target.value)>=0){
//         this.itensselecionados.push(item);
//       }
//     }
//   }
// }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AprovadosPage');
  }

}
