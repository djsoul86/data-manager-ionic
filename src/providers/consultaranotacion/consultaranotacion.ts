import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anotaciones } from '../../models/Anotaciones';
import { Observable } from 'rxjs/Observable';
import { Proyecto } from '../../models/Proyecto';

/*
  Generated class for the ConsultaranotacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultaranotacionProvider {
  defaultUrl: string = 'http://localhost:49800';
  proyectos: Proyecto[];
  constructor(public http: HttpClient) {
    
  }

  getAll(anotaciones: Anotaciones) {
    console.log(anotaciones);
    const url = `${this.defaultUrl}/api/ApiAnotaciones/obtenerPorId/${anotaciones}`;
    return this.http.post(url,anotaciones);
  };

  getAllProjects():Observable<Proyecto>{
    const url= `${this.defaultUrl}/api/ApiProyecto`;
    return this.http.get<Proyecto>(url);
  }

}
