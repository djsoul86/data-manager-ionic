import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Anotaciones } from '../../models/Anotaciones';
import { CrearanotacionProvider } from '../../providers/crearanotacion/crearanotacion';

/**
 * Generated class for the CrearanotacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crearanotacion',
  templateUrl: 'crearanotacion.html',
})
export class CrearanotacionPage {
  notifications:string;
  anotacion:string;
  items: Array<{ title: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams
    , public _anotacion: Anotaciones
    , public anotacion_service:CrearanotacionProvider) {
    this.items = [];
    this.items.push({
      title: 'Caia',

    }, { title: 'Personal' });

  }


  guardar(){
    this._anotacion.Anotacion = this.anotacion;
    this._anotacion.Proyecto = this.notifications;
    this.anotacion_service.create(this._anotacion);
    console.log(this.notifications);
    console.log(this.anotacion);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearanotacionPage');
  }

}
