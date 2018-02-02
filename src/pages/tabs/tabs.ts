import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FormularioPage } from '../formulario/formulario';
import { AprovacaoPage } from '../aprovacao/aprovacao';
import { NoeProvider } from '../../providers/noe/noe';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FormularioPage;
  tab3Root = AprovacaoPage;
  

  constructor(public noe: NoeProvider) {

  }
}
