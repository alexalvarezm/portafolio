import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-pagina.interfaces';
import { Equipo } from '../interfaces/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPage = {};
  equipo: Equipo[] = [];
  cargada = false;


  constructor(private http: HttpClient) {
    // console.log('servicio arriba');

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPage) => {
        this.cargada = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-9ca70.firebaseio.com/equipo.json')
      .subscribe( (resp: Equipo[]) => {
        this.equipo = resp;
      });
  }
}
