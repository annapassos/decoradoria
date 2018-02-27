import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BeneficiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beneficios',
  templateUrl: 'beneficios.html',
})
export class BeneficiosPage {

  searchQuery: '';
  items;
  itensselecionados= [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
    this.itensselecionados = this.items;
  }


  initializeItems() {
    this.items = [

      {
        nome: "Mão na Roda",
        descricao: "Pintura, montagem de móveis e outros serviços. Orçamento, compra de material e pagamento online, com segurança e praticidade.",
        imagem: "https://decoradoria.com/wp-content/uploads/2017/11/MNR-mao-na-roda.png",
        cupom: "15% de desconto para clientes Decoradoria",
        validade: "válido para cidade São Paulo",
      },

      {
        nome: "Mimoo Toys´n Dolls ",
        descricao: "Loja virtual feita para pequenos de 0 a 10 anos, gestantes e pais.",
        imagem: "https://decoradoria.com/wp-content/uploads/2017/12/logo-100006549-1503488607-67742d96d7a3caa1fabf432ca72326191503488607.jpg",
        cupom: "5% com cupom DECORA5 ",
        validade: "valido até 21/07/2018",    
       },

       {
        nome: "Democrart",
        descricao: "A maior galeria de arte do Brasil em edição limitada, numerada e assinada de quadros, gravuras e fotografias.",
        imagem: "https://decoradoria.com/wp-content/uploads/2017/12/democrart.jpg",
        cupom: "10% com cupom DECORADORIA",
        validade: "",    
       },

       {
        nome: "Loja Obra Fácil",
        descricao: "Revendedor Exclusivo Deca -Estoque a pronta entrega de torneiras,misturadores, etc…",
        imagem: "https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAjAAAAAJGRlYWYzMmQ4LWY2MmEtNDg1ZS05MjY3LWIyNmUyZGRhOGQ1Mg.png",
        cupom: "3%  com cupom 35981",
        validade: "valido até 01/11/2018",    
       },

       {
        nome: "Kitsart Adesivo",
        descricao: "Adesivos de Parede para todos os ambientes, Árvores, Arabescos, Cozinha, Grafismos, Infantis, Paineis, etc…",
        imagem: "https://decoradoria.com/wp-content/uploads/2017/12/logo-site-kitsart.png",
        cupom: "5% com cupom DECOR5",
        validade: "valido até 30/06/2018",    
       },

       {
        nome: "LivDecora ",
        descricao: "Loja online de móveis e decoração mais desejados da internet!",
        imagem: "https://decoradoria.com/wp-content/uploads/2017/12/Logo.jpg",
        cupom: "10% com cupom DECORADORIA",
        validade: "",    
       },

       {
        nome: "Galeria9",
        descricao: "Galeria de Arte descomplicada e acessível. ",
        imagem: "https://decoradoria.com/wp-content/uploads/2017/12/galeria9.jpg",
        cupom: "20% com cupom DECORADORIAG9",
        validade: "",    
       },

       {
        nome: "Sun House",
        descricao: "Móveis e Decorações com os Melhores Preços e Condições em ate 12x sem Juros. ",
        imagem: "https://decoradoria.com/wp-content/uploads/2017/12/sunhouse.jpg",
        cupom: "5% com cupom DECORADORIA",
        validade: "",    
       },

       {
        nome: "De Poster",
        descricao: " Site para Comprar Poster e Comprar Quadro Decorativo. ",
        imagem: "https://decoradoria.com/wp-content/uploads/2017/12/1489187045976.jpg",
        cupom: "10% com cupom DECO10",
        validade: "",    
       },

       {
        nome: "Cormilu",
        descricao: "Loja de Decoração com Luzes, Luminárias Decorativas de bolas e Iluminação Infantil para sua casa, quarto, sala e sua festa",
        imagem: "https://decoradoria.com/wp-content/uploads/2017/12/cormilu.jpg",
        cupom: "10% com cupom DECORADORIA",
        validade: "",    
       },


       {
        nome: "Cristais Cá d’Oro ",
        descricao: "asos e Objetos para deixar a sua casa ainda mais bonita! Decoração para a sua Casa · 100% Artesanal.",
        imagem: "https://decoradoria.com/wp-content/uploads/2017/12/CristaisCadoro.jpg",
        cupom: "5% com cupom DECORADORIA",
        validade: "valido até 31/03/2018",    
       },
       

    ]
  }





// VERIFICAR COMO FAZER LETRA MAIUSCULA E MINUSCULA

  getItems(ev: any) {
    if (ev.target.value == ""){
      this.itensselecionados = this.items;
    } else {
      this.itensselecionados=[];
      for(let item of this.items){
        if (item.nome.search(ev.target.value)>=0){
          this.itensselecionados.push(item);
        }
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeneficiosPage');
  }
}
