// core/services/auth.service.ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

interface User {
  email: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = 'https://reqres.in/api';
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'currentUser';

  private currentUser = signal<User | null>(null);

  get currentUserValue(): User | null {
    return this.currentUser();
  }

  constructor(private http: HttpClient, private router: Router) {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        this.currentUser.set(user);
      } catch {
        localStorage.removeItem(this.USER_KEY);
        this.currentUser.set(null);
      }
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, { email, password }).pipe(
      tap((response: any) => {
        if (response.token) {
          const user: User = {
            email,
            token: response.token,
          };
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
          localStorage.setItem(this.TOKEN_KEY, response.token);
          this.currentUser.set(user);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }
}
