import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { UserService } from '../../core/services/user.service';
import { ProductService } from '../../core/services/product.service';
import { PersonService } from '../../core/services/person.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private userService = inject(UserService);
  private productService = inject(ProductService);
  private personService = inject(PersonService);

  private usersCount = signal<number>(0);
  private productsCount = signal<number>(0);
  private personsCount = signal<number>(0);

  // Computed values for the template
  totalUsers = computed(() => this.usersCount());
  totalProducts = computed(() => this.productsCount());
  totalPersons = computed(() => this.personsCount());

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.userService.getUsers().subscribe((response) => {
      this.usersCount.set(response.total || response.data.length);
    });

    this.productService.getProducts().subscribe((response) => {
      this.productsCount.set(response.total || response.data.length);
    });

    this.personService.getPersons().subscribe((response) => {
      this.personsCount.set(response.total || response.data.length);
    });
  }
}
