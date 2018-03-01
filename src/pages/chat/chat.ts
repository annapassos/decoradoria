import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  // // para chat -copiado do medium.com
  // lista: FirebaselistObservable <any>;
  // mensagem: string;


  // constructor(public af: AngularFire) {
  //   this.lista = af.database.list('https://chat-decoradoria.firebaseio.com/chat');
  // }

  // enviar(){
  //   let m = {
  //     texto: this.mensagem,
  //     data: new Date()
  //   };
  //   this.lista.push(m). then (() => {
  //     this.mensagem ="";
  //   });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
}
