import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, tap } from 'rxjs';

import { Person, IResponse } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private readonly API_URL = 'https://fakerapi.it/api/v2/persons';
  private readonly http = inject(HttpClient);

  persons = signal<Person[]>([]);

  getPersons(): Observable<IResponse<Person>> {
    return this.http
      .get<IResponse<Person>>(`${this.API_URL}?_quantity=100`)
      .pipe(
        tap((response: IResponse<Person>) => this.persons.set(response.data))
      );
  }
}
