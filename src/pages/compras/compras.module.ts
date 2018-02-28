import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComprasPage } from './compras';
import { DetalhePageModule } from '../detalhe/detalhe.module';




@NgModule({
  declarations: [
    ComprasPage,


  ],
  imports: [
    IonicPageModule.forChild(ComprasPage),
    DetalhePageModule
  ],
})
export class ComprasPageModule {}
