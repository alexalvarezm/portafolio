import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { promise } from 'protractor';
import { resolve } from 'path';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class InfoProductosService {

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise ((resolve, reject) => {
      this.http.get('https://angular-html-9ca70.firebaseio.com/productos_idx.json')
          .subscribe((resp: Producto[]) => {
            this.productos = resp;
            this.cargando = false;
            resolve();
          });
    });
  }

  public getProducto(id) {
    return this.http.get(`https://angular-html-9ca70.firebaseio.com/productos/${ id }.json`);
  }

  public buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      this.cargarProductos().then( () => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {

    this.productosFiltrados = this.productos.filter( (producto: Producto) => {
      const terminoLow = termino.toLocaleLowerCase();
      const categoriaLow = producto.categoria.toLocaleLowerCase();
      const tituloLow = producto.titulo.toLocaleLowerCase();

      if (categoriaLow.indexOf(terminoLow) >= 0 || tituloLow.indexOf(terminoLow) >= 0) {
        return producto;
        console.log(this.productosFiltrados);
      }
    });
  }
}
