import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anotaciones } from '../../models/Anotaciones';

@Injectable()
export class CrearanotacionProvider {
  defaultUrl: string = 'http://localhost:49800';
  constructor(public httpClient: HttpClient) {
    console.log('Hello CrearanotacionProvider Provider');
  }

  create(pendiente: Anotaciones): any {
    const url = `${this.defaultUrl}/api/ApiAnotaciones`;
    const formData: FormData = new FormData();
    formData.append('Proyecto', pendiente.Proyecto);
    formData.append('Anotacion', pendiente.Anotacion);
    pendiente.File = new FormData();

    return this.httpClient.put(url, formData).subscribe(
      (data => console.log(data)),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Un error ha ocurrido', err.error.message);
        } else {
          console.log(`Backend ha regresado un error ${err.status}, body fue ${err.error}`);
        }
      });
  }

}
