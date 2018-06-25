import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Anotaciones } from '../../models/Anotaciones';

/**
 * Generated class for the ResultadosanotacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultadosanotacion',
  templateUrl: 'resultadosanotacion.html',
})
export class ResultadosanotacionPage {
  anotacion:Anotaciones[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.anotacion = navParams.get('data');
  }

  ionViewDidLoad() {
    
  }

}
