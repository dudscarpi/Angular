import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-to-do-controls',
  templateUrl: './to-do-controls.component.html',
  styleUrls: ['./to-do-controls.component.css']
})
export class ToDoControlsComponent implements OnInit {
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