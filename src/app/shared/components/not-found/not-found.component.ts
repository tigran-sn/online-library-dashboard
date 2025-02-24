import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from '../../../core/services';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  protected authService = inject(AuthService);
  protected targetRoute = computed(() =>
    this.authService.isLoggedIn() ? '/dashboard' : '/login'
  );
  protected targetText = computed(() =>
    this.authService.isLoggedIn() ? 'Dashboard' : 'Login'
  );
}
