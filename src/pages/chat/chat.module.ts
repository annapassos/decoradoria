import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';


@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
  ],
})
export class ChatPageModule {
  // constructor(public af: AngularFire) {
  
  // }
}


