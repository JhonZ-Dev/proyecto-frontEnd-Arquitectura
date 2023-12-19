import { Component, OnInit } from '@angular/core';
import { Movimiento } from '../movimiento';
import { MovimientoService } from '../movimiento.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-movimiento',
  templateUrl: './guardar-movimiento.component.html',
  styleUrls: ['./guardar-movimiento.component.css']
})
export class GuardarMovimientoComponent implements OnInit{

  movimientos:Movimiento = new Movimiento();
  producto_id:number;
  constructor(private service:MovimientoService, private router:Router, private activatedRouter:ActivatedRoute){}

  ngOnInit(){
    this.activatedRouter.paramMap.subscribe((params)=>{
      const producto_id = params.get('producto_id');
      if(producto_id !==null){
        this.producto_id = +producto_id
      }
    })
  }

  public guardarMovimientos(){
    if(this.validarFormulario()){
      this.service.guardarMovimientos(this.producto_id, this.movimientos).subscribe({
        next:(datos)=>{this.irListaMovimientos()}
      })

    }
    
  };

  irListaMovimientos(){
    this.router.navigate(['/movimientos-productos-categorias'])
  }

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
