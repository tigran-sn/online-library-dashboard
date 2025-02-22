import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, MatCardModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
