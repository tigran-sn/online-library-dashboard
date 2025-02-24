import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
