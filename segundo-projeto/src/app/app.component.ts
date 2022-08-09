import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundo-projeto';
  estiloDoCartao: string = 'display: block';
  texto: string =''

  @ViewChild('para')
  pOlaMundo!: ElementRef<HTMLParagraphElement>

  ngAfterViewInit(){
    setTimeout(() => {
      this.pOlaMundo.nativeElement.innerText = `Jojo's Bizarre blabla bla`
    })
    
}

  deletar(evento: any): void {
  console.log(evento)
  alert ('Cartão deletado')
  this.estiloDoCartao = 'display: none'
}

mudarTexto(valor: string): void {
  this.texto = 'valor'
}

}