import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FormularioPageModule } from '../pages/formulario/formulario.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule } from '@angular/forms';
import { NoeProvider } from '../providers/noe/noe';
import { ComprasPageModule } from '../pages/compras/compras.module';
import { LoginPage } from '../pages/login/login';
import { DetalhePageModule } from '../pages/detalhe/detalhe.module';
import { HttpClientModule } from '@angular/common/http';
import { BeneficiosPageModule } from '../pages/beneficios/beneficios.module';
import { ChatPageModule } from '../pages/chat/chat.module';
import { AprovadosPageModule } from '../pages/aprovados/aprovados.module';
import { MenuinclusaoPageModule } from '../pages/menuinclusao/menuinclusao.module';
import { EditarPageModule } from '../pages/editar/editar.module';
import { ProjetosPageModule } from '../pages/projetos/projetos.module';
import { FormprojetosPageModule } from '../pages/formprojetos/formprojetos.module';
import { AngularFireModule } from "angularfire2";
import { ChatPage } from '../pages/chat/chat';


export const firebaseConfig ={
    apiKey: "AIzaSyAN7pWFqWpVJIYv3HGEGyG4pS4HBr_GAM8",
    authDomain: "chat-decoradoria.firebaseapp.com",
    databaseURL: "https://chat-decoradoria.firebaseio.com",
    projectId: "chat-decoradoria",
    storageBucket: "chat-decoradoria.appspot.com",
    messagingSenderId: "178141663922"
  }


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    // BeneficiosPage,
    ChatPage,

  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormularioPageModule,
    FormsModule,
    ComprasPageModule,
    DetalhePageModule,
    HttpClientModule,
    BeneficiosPageModule,
    ChatPageModule,
    AprovadosPageModule,
    EditarPageModule,
    ProjetosPageModule,
    FormprojetosPageModule,
    MenuinclusaoPageModule,
    EditarPageModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    ChatPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoeProvider
  ]
})
export class AppModule {}
