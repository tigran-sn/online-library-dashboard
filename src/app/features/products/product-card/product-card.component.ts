import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { Product } from '@shared/models';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
}
