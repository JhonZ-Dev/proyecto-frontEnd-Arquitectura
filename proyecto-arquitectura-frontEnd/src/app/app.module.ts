import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{DataTablesModule} from 'angular-datatables'
import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { GuardarProductoComponent } from './productos/guardar-producto/guardar-producto.component';
import { ActualizarProductoComponent } from './productos/actualizar-producto/actualizar-producto.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { GuardarCategoriasComponent } from './categorias/guardar-categorias/guardar-categorias.component';
import { EditarCategoriasComponent } from './categorias/editar-categorias/editar-categorias.component';
import { MovimientoInventarioComponent } from './movimiento-inventario/movimiento-inventario.component';
import { GuardarMovimientoComponent } from './movimiento-inventario/guardar-movimiento/guardar-movimiento.component';
import { EditarMovimientoComponent } from './movimiento-inventario/editar-movimiento/editar-movimiento.component';
import { DetalleProductosComponent } from './productos/detalle-productos/detalle-productos.component';
import { DetallesCategoriasComponent } from './detalles-categorias/detalles-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    HomeComponent,
    ProductosComponent,
    GuardarProductoComponent,
    ActualizarProductoComponent,
    CategoriasComponent,
    GuardarCategoriasComponent,
    EditarCategoriasComponent,
    MovimientoInventarioComponent,
    GuardarMovimientoComponent,
    EditarMovimientoComponent,
    DetalleProductosComponent,
    DetallesCategoriasComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    DataTablesModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8081/usuarios'],
        sendAccessToken: true
    }
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
