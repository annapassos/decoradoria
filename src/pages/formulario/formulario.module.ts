import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormularioPage } from './formulario';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FormularioPage,
  ],
  imports: [
    IonicPageModule.forChild(FormularioPage),
    HttpClientModule
  ],
})
export class FormularioPageModule {}
