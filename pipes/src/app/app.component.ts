import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafe soulcode';
  subtitle: string = 'cafe para programadores'
  pessoa = {
    nome: 'Lucas',
    idade: 20,
    empregoAtual: 'Desempregado',
    estadoCivil: 'Solteiro',
  }

  botaoComprar ='Comprar'

  tituloProduto = 'Energetico TNT'
  
  linha1 = 'FOCUS'
  linha2 = 'SABORES'
  linha3 = 'ORIGINAL'

  nomeProduto1 = 'Pink Lemonade Zero rico em Colina 473ml'
  nomeProduto2 = 'Zero Açucares rico em Colina 473ml'
  nomeProduto3 = 'Sabor Original TNT 269ml'
  nomeProduto4 = 'Zero Açucares 269ml'
  nomeProduto5 = 'Maça Verde 269ml'
  nomeProduto6 = 'Açai 269ml'
  nomeProduto7 = 'Tangerina 269ml 269m'


  date: Date = new Date()
  produtos = [
    {
      nome: 'Play Station 5',
      descricao: 'Video game muito caro',
      preco: 5500,
      proprietarioDoPost:'Vitor',
      foto: 'https://villacafe.com.br/blog/wp-content/uploads/2017/11/136690-estender-1000-palavras-qual-e-a-diferenca-entre-o-cafe-gourmet-e-o-cafe-tradicional-760x460.jpg',
      dataDeCriacao: new Date()
    }
  ]
}
