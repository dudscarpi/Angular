import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PagamentoService } from 'src/app/chamados/services/pagamento.service';

@Component({
  selector: 'app-criar-pagamento',
  templateUrl: './criar-pagamento.component.html',
  styleUrls: ['./criar-pagamento.component.css']
})
export class CriarPagamentoComponent implements OnInit {
  idChamado!: number
  salvandoPagamento: boolean = false
  formPagamento: FormGroup = this.fb.group({
    valor: ['', [Validators.required]],
    formPagamento: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder, private dialogref: MatDialogRef<CriarPagamentoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private pagamentoService: PagamentoService) { }

  ngOnInit(): void {
    this.idChamado = this.data
  }
  
  salvar() {
    this.salvandoPagamento = true
    this.pagamentoService.salvarPagamento(this.formPagamento.value, this.idChamado).subscribe(() => {
      this.dialogref.close()
    })
  }
}