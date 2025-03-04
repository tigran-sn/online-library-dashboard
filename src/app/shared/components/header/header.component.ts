import { Component, inject, input, output } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { AuthService } from '@core/services';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  pageTitle = input('');
  isOpen = input(false);
  toggleSidenav = output();

  private authService = inject(AuthService);

  get currentUserEmail(): string {
    return this.authService.currentUserValue?.email || '';
  }

  logout(): void {
    this.authService.logout();
  }
}
