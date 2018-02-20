import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  opcao;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.opcao = this.navParams.get ('opcaoQueFoiClicado');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
    console.log(this.opcao)
  }

}
