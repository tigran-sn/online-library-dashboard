import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../core/services/user.service';
import { ProductService } from '../../core/services/product.service';
import { PersonService } from '../../core/services/person.service';
import { signal, computed } from '@angular/core';

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

  // Main statistics signals
  private usersCount = signal<number>(0);
  private productsCount = signal<number>(0);
  private personsCount = signal<number>(0);

  // Additional statistics signals
  private activeSessionsCount = signal<number>(12); // Mock data
  private recentActivitiesCount = signal<number>(28); // Mock data
  private todayNewUsersCount = signal<number>(5); // Mock data

  // Computed values for the template
  totalUsers = computed(() => this.usersCount());
  totalProducts = computed(() => this.productsCount());
  totalPersons = computed(() => this.personsCount());
  activeSessions = computed(() => this.activeSessionsCount());
  recentActivities = computed(() => this.recentActivitiesCount());
  newUsersToday = computed(() => this.todayNewUsersCount());

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    // Load Users
    this.userService.getUsers().subscribe((response) => {
      this.usersCount.set(response.total || response.data.length);
    });

    // Load Products
    this.productService.getProducts().subscribe((response) => {
      this.productsCount.set(response.total || response.data.length);
    });

    // Load Persons
    this.personService.getPersons().subscribe((response) => {
      this.personsCount.set(response.total || response.data.length);
    });

    // Update mock statistics periodically
    this.updateMockStatistics();
  }

  private updateMockStatistics(): void {
    // Simulate real-time updates every 30 seconds
    setInterval(() => {
      this.activeSessionsCount.update((count) =>
        Math.max(8, Math.min(20, count + Math.floor(Math.random() * 3) - 1))
      );
      this.recentActivitiesCount.update(
        (count) => count + Math.floor(Math.random() * 3)
      );
      this.todayNewUsersCount.update((count) =>
        Math.min(50, count + Math.floor(Math.random() * 2))
      );
    }, 30000);
  }
}

// Modify the respective service files to add total count tracking

// core/services/user.service.ts (add this signal)
// totalUsers = signal<number>(0);

// In the getUsers() method, update:
// getUsers(): Observable<any> {
//   return this.http.get(`${this.API_URL}?page=1`).pipe(
//     tap((response: any) => {
//       this.users.set(response.data);
//       this.totalUsers.set(response.total || response.data.length);
//     })
//   );
// }

// core/services/product.service.ts (add this signal)
// totalProducts = signal<number>(0);

// In the getProducts() method, update:
// getProducts(): Observable<any> {
//   return this.http.get(`${this.API_URL}?_quantity=50`).pipe(
//     tap((response: any) => {
//       this.allProducts.set(response.data);
//       this.totalProducts.set(response.total || response.data.length);
//     })
//   );
// }

// core/services/person.service.ts (add this signal)
// totalPersons = signal<number>(0);

// In the getPersons() method, update:
// getPersons(): Observable<any> {
//   return this.http.get(`${this.API_URL}?_quantity=100`).pipe(
//     tap((response: any) => {
//       this.persons.set(response.data);
//       this.totalPersons.set(response.total || response.data.length);
//     })
//   );
// }
