import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FormularioPage } from '../formulario/formulario';
import { ComprasPage } from '../compras/compras';
import { NoeProvider } from '../../providers/noe/noe';
import { BeneficiosPage } from '../beneficios/beneficios';
import { ChatPage } from '../chat/chat';
import { AprovadosPage } from '../aprovados/aprovados';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FormularioPage;
  tab3Root = ComprasPage;
  tab4Root = AprovadosPage; 
  tab5Root = BeneficiosPage; 
  tab6Root = ChatPage; 

  constructor(public noe: NoeProvider) {

  }
}
