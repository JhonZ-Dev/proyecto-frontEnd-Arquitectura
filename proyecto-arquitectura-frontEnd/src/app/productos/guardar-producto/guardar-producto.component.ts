import { Component } from '@angular/core';
import { Productos } from '../productos';
import { ProductosServicesService } from '../productos-services.service';
import Swal from 'sweetalert2';

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
    if(this.validarFormulario()){
      this.service.guardarProducto(this.productos).subscribe({
        next:(datos)=>{
          //ir a la pagina
          console.log(datos)
        }
      })
    } 
  }

  //
  validarFormulario() {
    if (!this.productos.nombre || !this.productos.precio || !this.productos.stock) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos correctamente.',
      });
      return false; 
    }
  
    // Resto de la lógica si el formulario es válido
    // ...
  
    return true; 
  }


}
