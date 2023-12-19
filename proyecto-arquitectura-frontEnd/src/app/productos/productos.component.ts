import { Component, OnDestroy, OnInit } from '@angular/core';
import { Productos } from './productos';
import { ProductosServicesService } from './productos-services.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit,OnDestroy {


  dtOptions: DataTables.Settings = {}; // Debe estar declarado en tu componente
  data:any = [];
  dtTrigger:Subject<any> = new Subject<any>();
  constructor(private service:ProductosServicesService, private enrutador:Router){}

  //listar
  productos:Productos[];

  ngOnInit(){
    this.listarProductos();
  }


  public listarProductos(){
    this.service.listarProductos().subscribe((data)=>{
      this.data = data;
      console.log(data);
      this.dtTrigger.next(data)

      
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  editarProducto(id:number){
    this.enrutador.navigate(['editar-producto',id])
  }

  eliminarProducto(id:number){
    this.service.elmimarProductos(id).subscribe(
      {
      next:(datos) =>this.listarProductos(),
      error:(errores:any) => console.log(errores)
    }
    );
  }

}
