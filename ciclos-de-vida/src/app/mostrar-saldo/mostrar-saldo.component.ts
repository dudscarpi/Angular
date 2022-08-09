import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mostrar-saldo',
  templateUrl: './mostrar-saldo.component.html',
  styleUrls: ['./mostrar-saldo.component.css']
})
export class MostrarSaldoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, OnDestroy {

  @Input()
  appSaldo: number = 697

  appSaldoAnterior: number | string = ''

  @ViewChild('paraSaldoAnterior')
  paraSaldoAnterior!: ElementRef<HTMLParagraphElement>

  constructor() { }
  

  ngOnChanges(changes: SimpleChanges): void { /* 1º ciclo de vida - conteudo é chamado quando os inputs é alterado */
    console.log('%cngOnChanges executado!', 'font-size: 20px; color: red;');
    
    if(changes['appSaldo'].previousValue != undefined) {
      this.appSaldoAnterior = changes ['appSaldo'].previousValue
    }else {
      this.appSaldoAnterior = 'Saldo não informado.'
    }
  }

  ngOnInit(): void{ /* 2º ciclo de vida - quando o html do componente for reindenizado (consegue acessar os valores que vem do input)*/
    console.log('%cngOnInit executado!', 'font-size: 20px; color: #c10000');
    console.log(this.appSaldo)
  }

  ngDoCheck(): void { /* 3º ciclo de vida - conteudo chamado a cada ciclo de vida */
    console.log('%cngDoCheck executado!', 'font-size: 20px; color: #970000;');
  }

  ngAfterContentInit(): void{ /* 4º ciclo de vida - conteudo que vem pelo ngcontent foi reindenizado completamente - valores do viewchild estarao prontos para ser acessados */
    console.log('%cngAfterContentInit executado!', 'font-size: 20px; color: #650021;');
  }

  ngAfterViewInit(): void { /* 5º ciclo de vida - fala que tudo no seu componente foi reindenizado (desde o html até o conteudo do ng content) */
    console.log(this.paraSaldoAnterior.nativeElement)
  }

  ngOnDestroy(): void {
    console.log('%cngOnDestroy executado!', 'font-size: 20px; color: blue;');
  }


}