import { Component, OnInit } from '@angular/core';
import { SharedConta } from '../shared.service';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {
  constructor(public conta: SharedConta) { }

  ngOnInit(): void {
  }

  aumentaContatore(): void {
    this.conta.incrementaContatore();
  }
}
