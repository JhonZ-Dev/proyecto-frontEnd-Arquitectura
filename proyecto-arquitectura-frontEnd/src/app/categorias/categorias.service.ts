import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from './categorias';
import { Observable } from 'rxjs';
import { Productos } from '../productos/productos';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private httpCategoria:HttpClient) { }
  url="http://localhost:3000/api/"

  //metodo para guardar
  public guardarCategoria(categoria:Categorias):Observable<Object>{
    return this.httpCategoria.post(this.url+"categorias",categoria);
  }

  //metodo para listar
  public listarCategorias():Observable<Categorias[]>{
    return this.httpCategoria.get<Productos[]>(this.url+"categorias")
  }

  //metodo para editar
  public editarCategoria(id:number, categoria:Categorias):Observable<Object>{
    return this.httpCategoria.put(this.url+"categorias/"+id,categoria);
  }

  //metodod para eliminar
  public eliminarCategoria(id:number):Observable<Object>{
    return this.httpCategoria.delete(this.url+"categorias/"+id);
  }
}
