import { Component, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

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
export class DashboardComponent {
  private router = inject(Router);
  private userService = inject(UserService);
  private productService = inject(ProductService);
  private personService = inject(PersonService);

  private users = toSignal(this.userService.getUsers());
  usersCount = computed(() => this.users()?.total);

  private products = toSignal(this.productService.getProducts());
  productsCount = computed(() => this.products()?.total);

  private persons = toSignal(this.personService.getPersons());
  personsCount = computed(() => this.persons()?.total);

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
