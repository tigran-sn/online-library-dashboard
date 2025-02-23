import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, tap } from 'rxjs';

import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API_URL = 'https://fakerapi.it/api/v2/products';
  private readonly ITEMS_PER_PAGE = 10;

  private readonly http = inject(HttpClient);

  private allProducts = signal<Product[]>([]);
  private currentPage = signal<number>(1);
  private sortType = signal<string>('none');

  products = computed(() => {
    let sorted = [...this.allProducts()];

    switch (this.sortType()) {
      case 'asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
    }

    return sorted;
  });

  displayedProducts = computed(() => {
    const products = this.products();
    return products.slice(0, this.currentPage() * this.ITEMS_PER_PAGE);
  });

  getProducts(): Observable<any> {
    return this.http
      .get(`${this.API_URL}?_quantity=50`)
      .pipe(tap((response: any) => this.allProducts.set(response.data)));
  }

  sortProducts(sortOrder: string): void {
    this.sortType.set(sortOrder);
  }

  loadMoreProducts(): void {
    if (this.canLoadMore()) {
      this.currentPage.update((page) => page + 1);
    }
  }

  canLoadMore(): boolean {
    return this.displayedProducts().length < this.allProducts().length;
  }
}
