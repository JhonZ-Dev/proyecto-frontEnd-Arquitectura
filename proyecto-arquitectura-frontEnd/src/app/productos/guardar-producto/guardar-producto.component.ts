import { Component } from '@angular/core';
import { Productos } from '../productos';
import { ProductosServicesService } from '../productos-services.service';

@Component({
  selector: 'app-guardar-producto',
  templateUrl: './guardar-producto.component.html',
  styleUrls: ['./guardar-producto.component.css']
})
export class GuardarProductoComponent {
  //
  productos:Productos=new Productos();

  constructor(private service:ProductosServicesService){}

  //guardarProducto
  public guardarProducto(){
    this.service.guardarProducto(this.productos).subscribe({
      next:(datos)=>{
        //ir a la pagina
        console.log(datos)
      }
    })
  }


}
