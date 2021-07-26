import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  @Input()
  titulo: string;
  @Output()
  emisor = new EventEmitter;
  num1: number;
  num2: number;
  rpta: number;

  constructor() { }

  ngOnInit(): void {
  }

  calcular(operacion: string) {
    switch (operacion) {
      case 's':
        this.rpta = this.num1 + this.num2;
        break;
      case 'r':
        this.rpta = this.num1 - this.num2;
        break;
      case 'm':
        this.rpta = this.num1 * this.num2;
        break;
      case 'd':
        this.rpta = this.num1 / this.num2;
        break;
    }
    this.emisor.emit(this.rpta);
  }

}
