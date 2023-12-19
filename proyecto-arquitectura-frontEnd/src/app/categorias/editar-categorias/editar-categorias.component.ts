import { Component } from '@angular/core';
import { Categorias } from '../categorias';
import { CategoriasService } from '../categorias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.component.css']
})
export class EditarCategoriasComponent {
  constructor(private service:CategoriasService, private activedRouter:ActivatedRoute, private router:Router){}

  categoria: Categorias = new Categorias();
  id:number;

  ngOnInit(){
    this.activedRouter.paramMap.subscribe((params)=>{
      const id = params.get("id")
      if(id !==null){
        this.id = +id
      }
    })
  }

  public editarCategorias(){
    this.service.editarCategoria(this.id, this.categoria).subscribe({
      next:(datos)=>{
        this.irListaCategorias();
      }
    })
  }

  irListaCategorias(){
    this.router.navigate(["/categorias"])
  }

}
