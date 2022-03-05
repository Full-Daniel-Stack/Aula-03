/*Implementar um site com:

Barra de navegação

Página inicial apresentando o site

Página “sobre” apresentando a si mesmo (matrícula e nome) e seu perfil no GitHub

Página “tabuada” apresentando a tabuada do 5

Anexar o link do projeto no GitHub*/


import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
