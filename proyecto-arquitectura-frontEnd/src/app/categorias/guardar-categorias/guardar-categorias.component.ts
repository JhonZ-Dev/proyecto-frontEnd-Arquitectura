import { Component } from '@angular/core';
import { Categorias } from '../categorias';
import { CategoriasService } from '../categorias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardar-categorias',
  templateUrl: './guardar-categorias.component.html',
  styleUrls: ['./guardar-categorias.component.css']
})
export class GuardarCategoriasComponent {

  categorias:Categorias = new Categorias();
  constructor(private service:CategoriasService, private router:Router){}

  //guarda
  public guardarCategoria(){
    this.service.guardarCategoria(this.categorias).subscribe({next:
    (datoa)=>{
      this.irListarCategorias();
      console.log(datoa);
    }})
  }

  irListarCategorias(){
    this.router.navigate(['/categorias'])
  }

}
