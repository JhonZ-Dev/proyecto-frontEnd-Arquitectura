import { Component } from '@angular/core';
import { Movimiento } from './movimiento';
import { MovimientoService } from './movimiento.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

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
    this.listarMovimientos();
  }

  public listarMovimientos(){
    this.service.listarMovimientos().subscribe((data)=>{
      this.data = data;
      this.dtTrigger.next(data)
    })
  }

  editarMovimientos(id:number){
    this.enrutar.navigate(['editar-movimientos',id])
  }
  eliminarMovimientos(id:number){
    this.service.eliminarMovimientos(id).subscribe(
      {
      next:(datos) =>this.listarMovimientos(),
      error:(errores:any) => console.log(errores)
    }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
