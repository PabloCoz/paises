import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {

  search: string = '';
  paises: Country[] = [];
  error: boolean = false;
  constructor(private paisService: PaisService) { }
  busqueda() {
    this.error = true;
    this.paisService.buscarPais(this.search).subscribe((res) => {
      console.log(res);
    }, (err) => {
      this.error = true;
      this.paises = [];
    });
  }
}
