import { Component, Input, Output, EventEmitter, inject } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { AuthService } from '../../../core/services/auth.service';

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
  @Input() pageTitle = '';
  @Input() isOpen = false;
  @Output() toggleSidenav = new EventEmitter<void>();

  private authService = inject(AuthService);

  get currentUserEmail(): string {
    return this.authService.currentUserValue?.email || '';
  }

  logout(): void {
    this.authService.logout();
  }
}
