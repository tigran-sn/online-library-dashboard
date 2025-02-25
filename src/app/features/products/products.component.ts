import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { ProductService } from '../../core/services/product.service';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    ProductCardComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  private readonly productService = inject(ProductService);

  sortOrder = signal('none');

  displayedProducts = this.productService.displayedProducts;

  protected products = toSignal(this.productService.getProducts(), {
    initialValue: null,
  });

  canLoadMore = this.productService.canLoadMore;

  onSortChange(): void {
    this.productService.sortProducts(this.sortOrder());
  }

  loadMore(): void {
    this.productService.loadMoreProducts();
  }
}
