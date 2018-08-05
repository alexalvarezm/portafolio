import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProductosService } from '../../services/info-productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public productoService: InfoProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.productoService.buscarProducto(params['termino']);
      }
    );
  }

}
