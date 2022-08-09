import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstitch',
  templateUrl: './diretiva-ngstitch.component.html',
  styleUrls: ['./diretiva-ngstitch.component.css']
})
export class DiretivaNgstitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cor: string = 'preto'
  mudarCor(novaCor: string): void {
    this.cor = novaCor
  }
}
