import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FormularioPage } from '../formulario/formulario';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FormularioPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
