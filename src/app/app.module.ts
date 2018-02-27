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
import { AprovacaoPageModule } from '../pages/aprovacao/aprovacao.module';
import { LoginPage } from '../pages/login/login';
import { DetalhePageModule } from '../pages/detalhe/detalhe.module';
import { HttpClientModule } from '@angular/common/http';
import { BeneficiosPageModule } from '../pages/beneficios/beneficios.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormularioPageModule,
    FormsModule,
    AprovacaoPageModule,
    DetalhePageModule,
    HttpClientModule
    BeneficiosPageModule,
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
