import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private url: string = 'https://restcountries.com/v3.1/';
  constructor(private http:HttpClient) { }

  buscarPais(search:string): Observable<Country>
  {
    return this.http.get<Country>(`${this.url}/name/${search}`);
  }

}
