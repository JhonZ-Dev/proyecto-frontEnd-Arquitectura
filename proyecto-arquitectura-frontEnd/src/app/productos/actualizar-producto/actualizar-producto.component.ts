import { Component } from '@angular/core';
import { Productos } from '../productos';
import { ProductosServicesService } from '../productos-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent {

  producto:Productos= new Productos();
  id : number;

  constructor(private servicio:ProductosServicesService, private actived: ActivatedRoute, private router:Router){}

  ngOnInit() {
    this.actived.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id !== null) {
        this.id = +id;

        // Obtener los datos del producto por el ID y asignarlos al modelo
        this.servicio.obtenerProductoPorId(this.id).subscribe((producto) => {
          this.producto = producto;
        });
      }
    })
  }
  actualizarProducto(){
    if(this.validarFormulario()){
      this.servicio.actualizarProductos(this.id,this.producto).subscribe({
        next:(datos)=>{
          //redigir a ora página
         // this.irPagina();
        }
      })
    }
    
  };

  //redirigir
  irPagina(){
    this.router.navigate(["/productos"])
  }

  validarFormulario() {
    // Validación de solo texto en el campo nombre
    const soloTextoRegex = /^[a-zA-Z\s]+$/;
    if (!soloTextoRegex.test(this.producto.nombre)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El campo de nombre solo puede contener letras y espacios.',
      });
      return false;
    }
  
    // Validación de campos vacíos
    if (!this.producto.nombre || !this.producto.precio || !this.producto.stock) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos correctamente.',
      });
      return false;
    }
  
    // Resto de la lógica si el formulario es válido
    // ...
  
    // Alerta de éxito
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Formulario validado correctamente. ¡Puedes continuar!',
      confirmButtonText: 'Aceptar' // Cambia el texto del botón Aceptar según tus necesidades
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirige a otra página después de hacer clic en Aceptar
        this.router.navigate(['/productos']); // Reemplaza '/otra-pagina' con la ruta de la página a la que deseas redirigir
      }
    });
  
    return true;
  }



}
