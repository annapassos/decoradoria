import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoeProvider } from '../../providers/noe/noe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public noe: NoeProvider) {
    noe.itens
  }

}
