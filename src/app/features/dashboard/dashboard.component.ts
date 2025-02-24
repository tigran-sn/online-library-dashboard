import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { UserService } from '../../core/services/user.service';
import { ProductService } from '../../core/services/product.service';
import { PersonService } from '../../core/services/person.service';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  private router = inject(Router);
  private userService = inject(UserService);
  private productService = inject(ProductService);
  private personService = inject(PersonService);

  private usersCount = signal<number>(0);
  private productsCount = signal<number>(0);
  private personsCount = signal<number>(0);

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

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
