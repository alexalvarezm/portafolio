import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPage = {};
  cargada = false;


  constructor(private http: HttpClient) {
    // console.log('servicio arriba');

    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPage) => {
        this.cargada = true;
        this.info = resp;
        console.log(this.info.titulo);
      });

  }
}
