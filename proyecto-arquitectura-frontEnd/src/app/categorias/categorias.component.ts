import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { Subject } from 'rxjs';
import { Categorias } from './categorias';
import { Router } from '@angular/router';
import { error } from 'jquery';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit, OnDestroy{
  dtOptions: DataTables.Settings = {}; // Debe estar declarado en tu componente
  data:any = [];
  dtTrigger:Subject<any> = new Subject<any>();
  categorias:Categorias[];
  constructor(private service: CategoriasService, private enrutador:Router){}

  //listar
  ngOnInit(){

    this.listarProductos();
  }






 

  private listarProductos(){
    this.service.listarCategorias().subscribe((data)=>{
      this.data = data;
      console.log(data);
      this.dtTrigger.next(data)
    })
  }


  editarCategoria(id:number){
    this.enrutador.navigate(['editar-categoria',id])
  }

  eliminarCategorias(id:number){
    this.service.eliminarCategoria(id).subscribe({
      next:(datos) =>this.listarProductos(),
      error:(errores:any) => console.log(errores)
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
