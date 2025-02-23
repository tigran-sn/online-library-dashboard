import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, Observable, tap } from 'rxjs';

import { User } from '../../shared/models/user.model';
import { NotificationService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URL = 'https://reqres.in/api/users';

  private readonly notificationService = inject(NotificationService);
  private readonly http = inject(HttpClient);

  users = signal<User[]>([]);

  getUsers(): Observable<any> {
    return this.http
      .get(`${this.API_URL}?page=1`)
      .pipe(tap((response: any) => this.users.set(response.data)));
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.API_URL, user).pipe(
      tap((newUser) => {
        this.users.update((users) => [...users, newUser]);
        this.notificationService.success(
          `User ${newUser.first_name} ${newUser.last_name} was successfully created`
        );
      }),
      catchError((error) => {
        this.notificationService.error('Failed to create user');
        throw error;
      })
    );
  }

  updateUser(user: Partial<User> & { id: number }): Observable<User> {
    return this.http.patch<User>(`${this.API_URL}/${user.id}`, user).pipe(
      tap((updatedUser) => {
        let previousUser: User | undefined;

        this.users.update((users) =>
          users.map((u) => {
            if (u.id === updatedUser.id) {
              previousUser = u;
              return { ...u, ...updatedUser };
            }
            return u;
          })
        );

        if (previousUser) {
          this.notificationService.success(
            `User ${previousUser.first_name} ${previousUser.last_name} was successfully updated`
          );
        }
      }),
      catchError((error) => {
        this.notificationService.error('Failed to update user');
        throw error;
      })
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`).pipe(
      tap(() => {
        let deletedUser: User | undefined;
        this.users.update((users) => {
          deletedUser = users.find((u) => u.id === id);
          return users.filter((u) => u.id !== id);
        });

        if (deletedUser) {
          this.notificationService.success(
            `User ${deletedUser.first_name} ${deletedUser.last_name} was successfully deleted`
          );
        }
      }),
      catchError((error) => {
        this.notificationService.error('Failed to delete user');
        throw error;
      })
    );
  }
}
