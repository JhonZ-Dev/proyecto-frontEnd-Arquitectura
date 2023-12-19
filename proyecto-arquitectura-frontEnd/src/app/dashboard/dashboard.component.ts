import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';

export interface Persona {
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion: string;
  auto: string;
  costo: number;
}




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 

}

