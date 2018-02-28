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



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    // BeneficiosPage,
    // ChatPage,

  
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
    MenuinclusaoPageModule,
    EditarPageModule
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoeProvider
  ]
})
export class AppModule {}
