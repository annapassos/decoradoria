import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FormularioPage } from '../formulario/formulario';
import { ComprasPage } from '../compras/compras';
import { NoeProvider } from '../../providers/noe/noe';
import { BeneficiosPage } from '../beneficios/beneficios';
import { ChatPage } from '../chat/chat';
import { AprovadosPage } from '../aprovados/aprovados';
import { FormprojetosPage } from '../formprojetos/formprojetos';
import { ProjetosPage } from '../projetos/projetos';
import { MenuinclusaoPage } from '../menuinclusao/menuinclusao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MenuinclusaoPage;
  tab3Root = ComprasPage;
  tab4Root = AprovadosPage; 
  tab5Root = ProjetosPage; 
  tab6Root = BeneficiosPage; 
  tab7Root = ChatPage; 


  constructor(public noe: NoeProvider) {

  }
}
