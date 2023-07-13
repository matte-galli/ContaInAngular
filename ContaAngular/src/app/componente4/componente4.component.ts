import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
  }

  aumentaContatore(): void {
    this.sharedService.incrementaContatore();
  }
}
