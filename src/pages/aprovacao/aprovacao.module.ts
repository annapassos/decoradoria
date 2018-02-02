import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AprovacaoPage } from './aprovacao';
import { DetalhePage } from '../pages/detalhe/detalhe';


@NgModule({
  declarations: [
    AprovacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(AprovacaoPage),
  ],
})
export class AprovacaoPageModule {}
