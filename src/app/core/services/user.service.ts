import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API_URL = 'https://reqres.in/api/users';

  users = signal<User[]>([]);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http
      .get(`${this.API_URL}?page=1`)
      .pipe(tap((response: any) => this.users.set(response.data)));
  }

  createUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.API_URL, user)
      .pipe(
        tap((newUser) => this.users.update((users) => [...users, newUser]))
      );
  }

  updateUser(user: Partial<User> & { id: number }): Observable<User> {
    return this.http.patch<User>(`${this.API_URL}/${user.id}`, user).pipe(
      tap((updatedUser) => {
        this.users.update((users) =>
          users.map((u) =>
            u.id === updatedUser.id ? { ...u, ...updatedUser } : u
          )
        );
      })
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`).pipe(
      tap(() => {
        this.users.update((users) => users.filter((u) => u.id !== id));
      })
    );
  }
}
