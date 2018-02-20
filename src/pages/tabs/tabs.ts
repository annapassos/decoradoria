import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FormularioPage } from '../formulario/formulario';
import { AprovacaoPage } from '../aprovacao/aprovacao';
import { NoeProvider } from '../../providers/noe/noe';
import { BeneficiosPage } from '../beneficios/beneficios';
import { ChatPage } from '../chat/chat';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FormularioPage;
  tab3Root = AprovacaoPage;
  tab4Root = BeneficiosPage; 
  tab5Root = ChatPage; 

  constructor(public noe: NoeProvider) {

  }
}
