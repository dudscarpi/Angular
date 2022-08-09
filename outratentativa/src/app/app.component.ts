import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'outratentativa';
  items: any [] = []

  adicionar (texto:string): void{
    this.items.push({mensagem:texto, id:this.items.length})
      }

  deletar (id:number):void{
    this.items = this.items.filter(mensagemTestada => mensagemTestada.id !== id )
  }
}
