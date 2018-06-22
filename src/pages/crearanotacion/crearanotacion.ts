import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  items: Array<{ title: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items.push({
      title: 'Caia',

    }, { title: 'Personal' });

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearanotacionPage');
  }

}
