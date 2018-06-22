import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnotacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anotaciones',
  templateUrl: 'anotaciones.html',
})
export class AnotacionesPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, idPage: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.items = [];

    this.items.push({
      title: 'Crear Anotacion',
      idPage: 'CrearanotacionPage'
    });

  }

  itemTapped(event, item) {
    console.log(item.idPage);
    this.navCtrl.push(item.idPage);
  }

}
