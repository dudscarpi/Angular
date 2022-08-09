import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-remover',
  templateUrl: './botao-remover.component.html',
  styleUrls: ['./botao-remover.component.css']
})
export class BotaoRemoverComponent implements OnInit {

  
  @Input()
  texto!: string 

  @Output()
  deletarTarefa: EventEmitter<any> = new EventEmitter();

  deletar():void{
  this.deletarTarefa.emit();
}

  constructor() { }

  ngOnInit(): void {
  }

}