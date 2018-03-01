import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormularioPage } from '../formulario/formulario';
import { FormprojetosPage } from '../formprojetos/formprojetos';

/**
 * Generated class for the MenuinclusaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuinclusao',
  templateUrl: 'menuinclusao.html',
})
export class MenuinclusaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuinclusaoPage');
  }

  irParaFormulario (){

    this.navCtrl.push(FormularioPage);
  }

  irParaFormProjetos (){

    this.navCtrl.push(FormprojetosPage);
  }

}
