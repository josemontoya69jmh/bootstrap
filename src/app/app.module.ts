
// Lo esencial para empezar a trabajar
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Estas importaciones son importantisimas para el enrutamiento
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';


// Aqui se van importando los componentes
import { AppComponent } from './app.component';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';

// aqui incluiremos las paginas y como las llamaremos
const routes: Routes = [
  {
    path: 'pagina1',
    component: Pagina1Component
  },
  {
    path: 'pagina2',
    component: Pagina2Component
  },
  {
    path: '**',
    redirectTo: 'pagina1'
  }
];






@NgModule({
  // En las declaraciones se pone los componentes
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    EncabezadoComponent
  ],
  // Aqui lo de las rutas
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent
  ],
  // Y tambien se exporta el RouterModule
  exports: [RouterModule]



})
export class AppModule { }

