import { Component } from '@angular/core';
import { Prodotto } from '../models/Prodotto';
import { PRODOTTI } from '../data/prodotti';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent {
  prodotti: Prodotto[] = PRODOTTI;
}
