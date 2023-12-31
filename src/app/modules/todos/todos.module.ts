import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { PaginadorComponent } from './paginador/paginador.component';
import { TodosService } from './todos.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TodosComponent,
    FiltrosComponent,
    ResultadosComponent,
    CabecalhoComponent,
    PaginadorComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule
  ],
  providers: [TodosService]
})
export class TodosModule { }
