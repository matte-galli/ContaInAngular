import { Component, OnInit } from '@angular/core';
import { SharedConta } from '../shared.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  constructor(public conta: SharedConta) { }

  ngOnInit(): void {
  }

  aumentaContatore(): void {
    this.conta.incrementaContatore();
  }

  resetContatore(): void {
    this.conta.reset();
  }

}
