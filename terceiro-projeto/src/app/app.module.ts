import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgstitchComponent } from './diretiva-ngstitch/diretiva-ngstitch.component';
import { CartaoComponent } from './cartao/cartao.component';
import { BtnDirective } from './btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgclassComponent,
    DiretivaNgifComponent,
    DiretivaNgforComponent,
    DiretivaNgstitchComponent,
    CartaoComponent,
    BtnDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
