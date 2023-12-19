import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimiento } from './movimiento';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  constructor(private htmovimiento:HttpClient) { }


  url="http://localhost:3000/api/"

  //metodo para listar
  public listarMovimientos():Observable<Movimiento[]>{
    return this.htmovimiento.get<Movimiento[]>(this.url+"movimiento_inventario")
  }

  //metodo para guardar
  public guardarMovimientos(producto_id:number,movimientos:Movimiento):Observable<Object>{
    return this.htmovimiento.post(this.url+"movimiento_inventario/"+producto_id,movimientos);
  }

  //metodo para editar
  public editarMovimientos(id:number, movimientos:Movimiento):Observable<Object>{
    return this.htmovimiento.put(this.url+"movimiento_inventario/"+id,movimientos)
  }

  //eliminar
  public eliminarMovimientos(id:number):Observable<Object>{
    return this.htmovimiento.delete(this.url+"movimiento_inventario/"+id)
  }

  //traerPorId
  
  //metodo para traerPorId
    // Método para obtener un producto por ID
    public obtenerPorId(id: number): Observable<Movimiento> {
      return this.htmovimiento.get<Movimiento>(this.url + "movimiento_inventario/" + id);
    }

}
