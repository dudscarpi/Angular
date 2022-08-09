import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotaoAdicionarComponent } from './botao-adicionar/botao-adicionar.component';
import { BotaoRemoverComponent } from './botao-remover/botao-remover.component';

@NgModule({
  declarations: [
    AppComponent,
    BotaoAdicionarComponent,
    BotaoRemoverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
