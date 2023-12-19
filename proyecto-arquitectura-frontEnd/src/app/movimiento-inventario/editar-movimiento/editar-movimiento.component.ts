import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movimiento } from '../movimiento';
import { ActivatedRoute, Router } from '@angular/router';
import { MovimientoService } from '../movimiento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-movimiento',
  templateUrl: './editar-movimiento.component.html',
  styleUrls: ['./editar-movimiento.component.css']
})
export class EditarMovimientoComponent implements OnInit {
 
  movimientos:Movimiento = new Movimiento();
  id : number;

  constructor(private actived:ActivatedRoute, private servicio:MovimientoService, private router:Router){}
  ngOnInit() {
    this.actived.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id !== null) {
        this.id = +id;

        // Obtener los datos del producto por el ID y asignarlos al modelo
        this.servicio.obtenerPorId(this.id).subscribe((movimiento) => {
          this.movimientos = movimiento;
        });
      }
    })
  }

  actualizarMovimiento(){
    if(this.validarFormulario()){
      this.servicio.editarMovimientos(this.id,this.movimientos).subscribe({
        next:(datos)=>{
          //redigir a ora página
         // this.irPagina();
        }
      })
    }
    
  };

  validarFormulario() {
    // Validación de solo texto en el campo nombre
    
    // Validación de campos vacíos
    if (!this.movimientos.cantidad || !this.movimientos.fecha_movimiento || !this.movimientos.tipo_movimiento) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos correctamente.',
      });
      return false;
    }
  
    // Resto de la lógica si el formulario es válido
    // ...
    const soloNumerosRegex = /^\d+$/;
    if (!soloNumerosRegex.test(String(this.movimientos.cantidad))) {
      Swal.fire('Error', 'La capacidad solo debe contener números', 'error');
      return;
    }
    // Alerta de éxito
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Formulario validado correctamente. ¡Puedes continuar!',
      confirmButtonText: 'Aceptar' // Cambia el texto del botón Aceptar según tus necesidades
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirige a otra página después de hacer clic en Aceptar
        this.router.navigate(['/movimientos-productos-categorias']); // Reemplaza '/otra-pagina' con la ruta de la página a la que deseas redirigir
      }
    });
  
    return true;
  }

  
}
