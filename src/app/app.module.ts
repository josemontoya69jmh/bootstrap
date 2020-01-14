import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pagina1',
    component:Pagina1Component
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
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent
  ],
  exports:[RouterModule]



})
export class AppModule { }

