import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductosComponent } from './productos/productos.component';
import { ActualizarProductoComponent } from './productos/actualizar-producto/actualizar-producto.component';
import { GuardarProductoComponent } from './productos/guardar-producto/guardar-producto.component';
import { GuardarCategoriasComponent } from './categorias/guardar-categorias/guardar-categorias.component';
import { EditarCategoriasComponent } from './categorias/editar-categorias/editar-categorias.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { GuardarMovimientoComponent } from './movimiento-inventario/guardar-movimiento/guardar-movimiento.component';
import { MovimientoInventarioComponent } from './movimiento-inventario/movimiento-inventario.component';
import { EditarMovimientoComponent } from './movimiento-inventario/editar-movimiento/editar-movimiento.component';
import { DetalleProductosComponent } from './productos/detalle-productos/detalle-productos.component';
import { DetallesCategoriasComponent } from './detalles-categorias/detalles-categorias.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //ruta principal
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'productos', component:ProductosComponent},
  {path:'editar-productos/:id', component:ActualizarProductoComponent},
  {path:'guardar-producto', component:GuardarProductoComponent},
  {path:'guardar-categorias', component:GuardarCategoriasComponent},
  {path:'editar-categoria/:id', component:EditarCategoriasComponent},
  {path:'categorias', component:CategoriasComponent},
  {path:'guardar-movimientos/:producto_id', component:GuardarMovimientoComponent},
  {path:'movimientos-productos-categorias', component:MovimientoInventarioComponent},
  {path:'editar-movimientos/:id', component:EditarMovimientoComponent},
  {path:'detalles-productos', component:DetalleProductosComponent},
  {path:'detalles', component:DetallesCategoriasComponent},
  {path:'home', component:HomeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
