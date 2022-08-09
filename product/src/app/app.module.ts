import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CardComponent } from './components/card/card.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormDialogComponent } from './components/form/form.component';


@NgModule({
  
  declarations: [
    AppComponent,
    CardComponent,
    ProductFormDialogComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
