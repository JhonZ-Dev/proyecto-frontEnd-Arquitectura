import { Component } from '@angular/core';
import { Productos } from '../productos';
import { ProductosServicesService } from '../productos-services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardar-producto',
  templateUrl: './guardar-producto.component.html',
  styleUrls: ['./guardar-producto.component.css']
})
export class GuardarProductoComponent {
  //
  productos:Productos=new Productos();

  constructor(private service:ProductosServicesService, private router:Router){}

  //guardarProducto
  public guardarProducto(){
    if(this.validarFormulario()){
      this.service.guardarProducto(this.productos).subscribe({
        next:(datos)=>{
          //ir a la pagina
          this.irPagina();
          console.log(datos)
        }
      })
    } 
  }

  //
  validarFormulario() {
    // Validación de solo texto en el campo nombre
    const soloTextoRegex = /^[a-zA-Z\s]+$/;
    if (!soloTextoRegex.test(this.productos.nombre)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El campo de nombre solo puede contener letras y espacios.',
      });
      return false;
    }
  
    // Validación de campos vacíos
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

  irPagina(){
    this.router.navigate(['/productos']);

  }


}
