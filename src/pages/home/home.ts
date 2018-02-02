import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoeProvider } from '../../providers/noe/noe';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public noe: NoeProvider) {

  }

  irParaLogin(){
    this.navCtrl.push(LoginPage);
  }


}
