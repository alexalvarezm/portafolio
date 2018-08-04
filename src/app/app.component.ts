import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { InfoProductosService } from './services/info-productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _info: InfoPaginaService, private productoService: InfoProductosService) {

  }
}
