import { Component, OnDestroy, OnInit } from '@angular/core';
import { Productos } from './productos';
import { ProductosServicesService } from './productos-services.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  // eliminarProducto(id:number){
  //   this.service.elmimarProductos(id).subscribe(
  //     {
  //     next:(datos) =>this.listarProductos(),
  //     error:(errores:any) => console.log(errores)
  //   }
  //   );
  // }
  eliminarProducto(id: number) {
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
        this.service.elmimarProductos(id).subscribe(
          () => {
            // Mostrar una alerta de éxito
            Swal.fire('¡Eliminado!', 'La estación ha sido eliminada.', 'success');
            // Volver a cargar las estaciones después de la eliminación
            this.listarProductos();
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

}
