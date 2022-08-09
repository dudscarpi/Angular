import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentosRoutingModule } from './pagamentos-routing.module';
import { ListarPagamentosComponent } from './components/pagamentos/listar-pagamentos/listar-pagamentos.component';
import { EditarPagamentoComponent } from './components/pagamentos/editar-pagamento/editar-pagamento.component';
import { CriarPagamentoComponent } from './components/pagamentos/criar-pagamento/criar-pagamento.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [
    ListarPagamentosComponent,
    EditarPagamentoComponent,
    CriarPagamentoComponent
  ],
  imports: [
    CommonModule,
    PagamentosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ]
})
export class PagamentosModule { }