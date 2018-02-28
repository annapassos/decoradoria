import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuinclusaoPage } from './menuinclusao';
import { FormularioPageModule } from  '../formulario/formulario.module';
// import { FormprojetosPageModule } from  '../formprojetos/formprojetos.module';


@NgModule({
  declarations: [
    MenuinclusaoPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuinclusaoPage),
    FormularioPageModule,
    // FormprojetosPageModule,
  ],
})
export class MenuinclusaoPageModule {}
