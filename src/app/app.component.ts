import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularS9';
  PrimerValor!:number;
  SegundoValor!:number;
  options = ['Elija una opción', 'suma', 'resta', 'multiplicación', 'división'];
  option = this.options[0];
}
