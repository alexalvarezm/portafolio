import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoPage } from '../../interfaces/info-pagina.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPagina: InfoPaginaService, private router: Router) {

  }

  ngOnInit() {
  }

  enviarTermino(termino: string) {
    if (termino.length < 1) {
      return;
    }

    this.router.navigate(['/search', termino]);
  }

}
