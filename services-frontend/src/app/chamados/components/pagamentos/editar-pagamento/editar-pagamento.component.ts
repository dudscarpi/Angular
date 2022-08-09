import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PagamentoService } from '../../../services/pagamento.service';
import { Pagamento } from './../../../models/pagamento';
import { CriarPagamentoComponent } from '../criar-pagamento/criar-pagamento.component';
import { ChamadosService } from '../../../services/chamados.service';
import { Chamado } from './../../../models/chamado';

@Component({
  selector: 'app-editar-pagamento',
  templateUrl: './editar-pagamento.component.html',
  styleUrls: ['./editar-pagamento.component.css']
})
export class EditarPagamentoComponent implements OnInit {
  chamados!: Chamado[]
  pagamento!: Pagamento
  formPagamentos: FormGroup = this.fb.group({
    valor: ['', [Validators.required, Validators.min(0)]],
    formPagamento: ['', [Validators.required]],
    status: ['']
  })

  constructor(
    private pagamentoService: PagamentoService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private chamadosService: ChamadosService,
    private dialogref: MatDialogRef<EditarPagamentoComponent>,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.pagamento = this.data;
    this.formPagamentos.setValue({
      valor: this.pagamento.valor,
      formPagamento: this.pagamento.formPagamento,
      status: this.pagamento.status
    }
    )
  }

  editarPagamento(pagamento: Pagamento) {
    const dialog = this.matDialog.open(EditarPagamentoComponent, { data: pagamento })
    dialog.afterClosed()
      .subscribe(() => {
        this.getChamados();
      })
  }

  inserirPagamento() {
    Object.assign(this.pagamento, this.formPagamentos.value)
    this.pagamentoService.atualizarPagamento(this.pagamento).subscribe(() => {
      this.snackBar.open('Pagamento atualizado com sucesso', ' Ok', {
        duration: 3000
      })
      this.dialogref.close()
    })
  }

  abrirFormPagamento(idChamado: number) {
    const dialog = this.matDialog.open(CriarPagamentoComponent, { data: idChamado })
    dialog.afterClosed()
      .subscribe(() => {
        this.getChamados();
      })
  }
  
    getChamados() {
      this.chamadosService.getChamados().subscribe(
        (response) => {
          this.chamados = response
        }
      )
    }
}