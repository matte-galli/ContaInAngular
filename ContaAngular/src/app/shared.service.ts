import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  contatore: number = 0;

  incrementaContatore(): void {
    this.contatore++;
  }

  reset(): void {
    this.contatore = 0;
  }
}
