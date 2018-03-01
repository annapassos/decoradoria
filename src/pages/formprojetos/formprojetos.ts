import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoeProvider } from '../../providers/noe/noe';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the FormprojetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formprojetos',
  templateUrl: 'formprojetos.html',
})
export class FormprojetosPage {
  clientes;
  dados = {
    clienteId: '',
    ambiente: '',
    tipo: '',
    opcoes: 
      [
        {
          versao: '',
          descricao:'',
          foto: '',
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
    console.log('ionViewDidLoad FormprojetosPage');
  }

  inserirFormulario(){
    this.http.post('http://localhost:3001/apiprojetos', this.dados).subscribe(() => {
      alert('Os dados foram salvos!');
    });
    this.dados = {
      clienteId: '',
      ambiente: '',
      tipo: '',
      opcoes: 
        [
          {
          versao: '',
          descricao:'',
          foto: '',
          }
        ]
      }
    }
  }
