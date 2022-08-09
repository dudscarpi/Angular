import { Component } from '@angular/core';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  hide = true;

  user: Usuario = {
    aceitaTermosDeCondicao: false,
    email: '',
    genero: '',
    nome: '',
    senha: '',
    username: '',
  }
  
salvarUsuario(){
  console.log(this.user)
} 

registrar(): void{
  alert('usuario cadastrado com sucesso!')
}


}
