import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { DetallesService } from './detalles.service';

@Component({
  selector: 'app-detalles-categorias',
  templateUrl: './detalles-categorias.component.html',
  styleUrls: ['./detalles-categorias.component.css']
})
export class DetallesCategoriasComponent implements OnInit,OnDestroy {

  dtOptions: DataTables.Settings = {}; // Debe estar declarado en tu componente
  data:any = [];

  dtTrigger:Subject<any> = new Subject<any>();

  constructor(private service:DetallesService){}
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers', // o cualquier otra configuración que necesites
    };
    this.obtenerPorductos2();
  }
  
  private obtenerPorductos2(){
    this.service.productosConCatergorias()
    .subscribe((data)=>{
      this.data=data;
    console.log(data);
    this.dtTrigger.next(data)})
  }

  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
