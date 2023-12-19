import { Component, OnDestroy, OnInit } from '@angular/core';
import { Detalleproducto } from '../detalleproducto';
import { ProductosServicesService } from '../productos-services.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit, OnDestroy {


  dtOptions: DataTables.Settings = {}; // Debe estar declarado en tu componente
  data:any = [];
  dtTrigger:Subject<any> = new Subject<any>();
  detalle_producto:Detalleproducto[];
  constructor(private service:ProductosServicesService){}

  ngOnInit(){
    
    
  }

 

  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
