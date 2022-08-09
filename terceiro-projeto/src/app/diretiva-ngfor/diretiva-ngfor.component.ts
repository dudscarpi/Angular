import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  nomes: String[] = ['Dani Pereira', 'Daniel', 'Claudia','Fernando', 'Manuela', 'Tati']

  constructor() { }

  ngOnInit(): void {
  }

add(nome: string): void{
  this.nomes.push(nome)
}


}
