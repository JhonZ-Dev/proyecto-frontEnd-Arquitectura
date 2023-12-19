import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Productos } from './productos';
import { Detalleproducto } from './detalleproducto';

@Injectable({
  providedIn: 'root'
})
export class ProductosServicesService {


  constructor(private httproductos: HttpClient) { }
  url = "http://localhost:3000/api/"
  //metodo para listtar
  public listarProductos():Observable<Productos[]>{
    return this.httproductos.get<Productos[]>(this.url+"producto")
  }

  //metodo para guardar
  public guardarProducto(producto:Productos):Observable<Object>{
    return this.httproductos.post(this.url+"producto",producto);
  }

  //metodo para atualizar
  public actualizarProductos(id:number, producto:Productos):Observable<Object>{
    return this.httproductos.put(this.url+"producto/"+id, producto);
  }

  //eliminar
  public elmimarProductos(id:number):Observable<Object>{
    return this.httproductos.delete(this.url+"producto/"+id);
  }

  //metodo para traerPorId
    // Método para obtener un producto por ID
    public obtenerProductoPorId(id: number): Observable<Productos> {
      return this.httproductos.get<Productos>(this.url + "producto/" + id);
    }
  


}
