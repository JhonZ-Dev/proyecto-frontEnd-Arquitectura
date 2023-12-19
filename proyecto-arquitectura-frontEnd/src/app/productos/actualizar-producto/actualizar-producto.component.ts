import { Component } from '@angular/core';
import { Productos } from '../productos';
import { ProductosServicesService } from '../productos-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent {

  producto:Productos= new Productos();
  id : number;

  constructor(private servicio:ProductosServicesService, private actived: ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.actived.paramMap.subscribe((params)=>{
      const id = params.get("id");
      if(id !==null){
       this.id = +id 
      }
    })
  }

  actualizarProducto(){
    this.servicio.actualizarProductos(this.id,this.producto).subscribe({
      next:(datos)=>{
        //redigir a ora página
        this.irPagina();
      }
    })
  };

  //redirigir
  irPagina(){
    this.router.navigate(["/productos"])
  }

}
