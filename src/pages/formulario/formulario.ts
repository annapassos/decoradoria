import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoeProvider } from '../../providers/noe/noe';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  clientes;
  dados = {
    clienteId: '',
    ambiente: '',
    tipo: '',
    opcoes: 
      [
        {
          marca: '',
          modelo: '',
          quantidade: '',
          preco: '',
          link:'',
          descricao:'',
          foto: '',
          ambiente: '',
          tipo: '',
          status: 'analise'
        }
      ]
    }
           

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public noe: NoeProvider,
    public http: HttpClient) {
      this.http.get('http://localhost:3001/apiclientes').subscribe(
      (cadastro) => {
        this.clientes = cadastro;
        console.log(cadastro)
      }
    )
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  inserirFormulario(){
    this.http.post('http://localhost:3001/apiitens', this.dados).subscribe(() => {
      alert('Os dados foram salvos!');
    });
    this.dados = {
      clienteId: '',
      ambiente: '',
      tipo: '',
      opcoes: 
        [
          {
            marca: '',
            modelo: '',
            quantidade: '',
            preco: '',
            link:'',
            descricao:'',
            foto: '',
            ambiente:'',
            tipo:'',
            status: 'analise'
          }
        ]
      } 
  }
}
