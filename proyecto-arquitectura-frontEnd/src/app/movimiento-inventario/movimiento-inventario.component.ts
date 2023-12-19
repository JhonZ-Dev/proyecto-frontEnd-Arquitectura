import { Component } from '@angular/core';
import { Movimiento } from './movimiento';
import { MovimientoService } from './movimiento.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movimiento-inventario',
  templateUrl: './movimiento-inventario.component.html',
  styleUrls: ['./movimiento-inventario.component.css']
})
export class MovimientoInventarioComponent {
  dtOptions: DataTables.Settings = {}; // Debe estar declarado en tu componente
  data:any = [];

  dtTrigger:Subject<any> = new Subject<any>();
  movimientos: Movimiento[];

  constructor(private service:MovimientoService,
              private enrutar:Router,
              ){}

  ngOnInit(){
    this.dtOptions = {
      language: {
        url: "/assets/Spanish.json"
      },
    };
    this.listarMovimientos();
  }

  public listarMovimientos(){
    this.service.listarMovimientos().subscribe((data)=>{
      this.data = data;
      this.dtTrigger.next(this.dtOptions)
      this.dtTrigger.unsubscribe(); // Desactivar DataTables
    })
  }

  editarMovimientos(id:number){
    this.enrutar.navigate(['editar-movimientos',id])
  }
  
  // eliminarMovimientos(id:number){
  //   this.service.eliminarMovimientos(id).subscribe(
  //     {
  //     next:(datos) =>this.listarMovimientos(),
  //     error:(errores:any) => console.log(errores)
  //   }
  //   );
  // }

  eliminarMovimientos(id: number) {
    // Mostrar la alerta de confirmación
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario hace clic en "Sí, eliminarlo", proceder con la eliminación
        this.service.eliminarMovimientos(id).subscribe(
          () => {
            // Mostrar una alerta de éxito
            Swal.fire('¡Eliminado!', 'La estación ha sido eliminada.', 'success');
            // Volver a cargar las estaciones después de la eliminación
            this.listarMovimientos();
          },
          (error) => {
            console.error('Error al eliminar estación:', error);
            // Mostrar una alerta de error en caso de fallo en la eliminación
            Swal.fire('Error', 'Hubo un error al eliminar la estación.', 'error');
          }
        );
      }
    });
  }






  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
