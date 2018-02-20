import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AprovacaoPage } from './aprovacao';
import { DetalhePageModule } from '../detalhe/detalhe.module';




@NgModule({
  declarations: [
    AprovacaoPage,


  ],
  imports: [
    IonicPageModule.forChild(AprovacaoPage),
    DetalhePageModule
  ],
})
export class AprovacaoPageModule {}
