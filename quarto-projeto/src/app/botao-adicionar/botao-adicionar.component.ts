import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-botao-adicionar',
  templateUrl: './botao-adicionar.component.html',
  styleUrls: ['./botao-adicionar.component.css']
})
export class BotaoAdicionarComponent implements OnInit {

  @Output()

  addTarefa: EventEmitter  <any> = new EventEmitter();
  salvar (texto:string):void{
    if (texto !=""){
      this.addTarefa.emit(texto)
    }
   this.inputText.nativeElement.value=""
  }
  
  @ViewChild("input")
  inputText!: ElementRef;
  
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }