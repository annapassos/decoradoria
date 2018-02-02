import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FormularioPage } from '../formulario/formulario';
import { AprovacaoPage } from '../aprovacao/aprovacao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FormularioPage;
  tab3Root = ContactPage;
  tab4Root = AprovacaoPage;

  constructor() {

  }
}
