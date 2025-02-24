import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/snackbar.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly notificationService = inject(NotificationService);

  private redirectUrl: string | null = null;

  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.route.queryParams.subscribe((params) => {
      this.redirectUrl = params['redirectUrl'] || '/dashboard';
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: () => {
          this.notificationService.success('Login successful');
          this.router.navigateByUrl(this.redirectUrl || '/');
        },
        error: (error) => {
          let errorMessage = 'Login failed. Please try again.';

          if (error.error?.error) {
            switch (error.error.error) {
              case 'user not found':
                errorMessage = 'Invalid email or password';
                break;
              case 'Missing password':
                errorMessage = 'Password is required';
                break;
              case 'Missing email':
                errorMessage = 'Email is required';
                break;
              default:
                errorMessage = `Authentication failed: ${error.error.error}`;
            }
          }

          this.notificationService.error(errorMessage);

          this.loginForm.get('email')?.markAsTouched();
          this.loginForm.get('password')?.markAsTouched();
        },
      });
    }
  }
}
