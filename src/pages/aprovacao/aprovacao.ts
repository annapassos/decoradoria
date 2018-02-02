import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoeProvider } from '../../providers/noe/noe';


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

  constructor(public navCtrl: NavController, public navParams: NavParams,public noe: NoeProvider) {
    noe.itens
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AprovacaoPage');
  }

}
