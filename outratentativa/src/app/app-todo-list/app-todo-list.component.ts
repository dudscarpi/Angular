import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-todo-list',
  templateUrl: './app-todo-list.component.html',
  styleUrls: ['./app-todo-list.component.css']
})
export class AppTodoListComponent implements OnInit {

 
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