import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaranotacionProvider } from '../../providers/consultaranotacion/consultaranotacion';
import { Proyecto } from '../../models/Proyecto';
import { Anotaciones } from '../../models/Anotaciones';
import { HttpErrorResponse } from '@angular/common/http';
import { ResultadosanotacionPage } from '../resultadosanotacion/resultadosanotacion';

/**
 * Generated class for the ConsultaranotacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultaranotacion',
  templateUrl: 'consultaranotacion.html',
})
export class ConsultaranotacionPage {
  proyectos: Proyecto[];
  project: string;
  anotacion: string;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public _service: ConsultaranotacionProvider
    , public _anotacion: Anotaciones) {
  }

  ionViewDidLoad() {
    this._service.getAllProjects().subscribe(
      (data: any) => {
        console.log(data);
        this.proyectos = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  buscar() {
    this._anotacion.Proyecto = this.project;
    this._anotacion.Anotacion = this.anotacion;
    this._service.getAll(this._anotacion).subscribe(
      (data: any) => {
       if (data.length != undefined && data.length > 0) {
         console.log(data);
         this.navCtrl.push(ResultadosanotacionPage,{
            data:data
         });
      }
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Un error ha ocurrido', err.error.message);
        } else {
          console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
        }
      }
    });
  }
}
