import { Component, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { UserService, ProductService, PersonService } from '@core/services';

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

  protected users = toSignal(this.userService.getUsers(), {
    initialValue: null,
  });
  protected products = toSignal(this.productService.getProducts(), {
    initialValue: null,
  });
  protected persons = toSignal(this.personService.getPersons(), {
    initialValue: null,
  });
  protected usersCount = computed(() => this.users()?.total ?? 0);
  protected productsCount = computed(() => this.products()?.total ?? 0);
  protected personsCount = computed(() => this.persons()?.total ?? 0);

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
