import { Injectable } from '@angular/core';
import { Detalleproducto } from '../productos/detalleproducto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallesService {

  
  constructor(private httproductos: HttpClient) { }
  url = "http://localhost:3000/api/"


    public productosConCatergorias():Observable<Detalleproducto[]>{
    return this.httproductos.get<Detalleproducto[]>(this.url+"producto/productos_con_categorias2");

  }
}
