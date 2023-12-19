import { Component, OnInit } from '@angular/core';
import { Movimiento } from '../movimiento';
import { MovimientoService } from '../movimiento.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.service.guardarMovimientos(this.producto_id, this.movimientos).subscribe({
      next:(datos)=>{this.irListaMovimientos()}
    })
  };

  irListaMovimientos(){
    this.router.navigate(['/movimientos-productos-categorias'])
  }

}
