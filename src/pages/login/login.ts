import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoeProvider } from '../../providers/noe/noe';
import { FormularioPage } from '../formulario/formulario';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userArquiteto = {
    nome: "Vanessa",
    senha: "123456"
  }
  userLogin = {
    nome: "",
    senha: ""
  }
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public noe: NoeProvider) {
    // validar(){
    //   for(let chave in this.userArquiteto) {
    //     if(this.userArquiteto[chave] === this.userLogin[chave]) continue
    //     return false
    //   }
    //   return true
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  validaLogin(){
    if (this.userArquiteto.nome === this.userLogin.nome && this.userArquiteto.senha === this.userLogin.senha){
      this.noe.acessoPermitido();
      this.navCtrl.push(FormularioPage);
    }
    this.userLogin = {
      nome: "",
      senha: ""
    }
  }

  

}
