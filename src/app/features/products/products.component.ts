import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { ProductService } from '../../core/services/product.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    ProductCardComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);

  products = this.productService.products;
  displayedProducts = this.productService.displayedProducts;
  sortOrder = 'none';

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe();
  }

  onSortChange(): void {
    this.productService.sortProducts(this.sortOrder);
  }

  loadMore(): void {
    this.productService.loadMoreProducts();
  }

  canLoadMore(): boolean {
    return this.productService.canLoadMore();
  }
}
