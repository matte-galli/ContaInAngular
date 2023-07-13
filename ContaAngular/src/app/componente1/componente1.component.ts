import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
  }

  aumentaContatore(): void {
    this.sharedService.incrementaContatore();
  }
}
