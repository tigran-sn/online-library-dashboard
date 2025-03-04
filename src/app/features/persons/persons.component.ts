import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';

import { PersonService } from '../../core/services/person.service';
import { Person } from '../../shared/models/person.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-persons',
  imports: [
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss',
})
export class PersonsComponent {
  private readonly personService = inject(PersonService);

  displayedColumns = ['firstname', 'lastname', 'email', 'phone', 'website'];

  persons = this.personService.persons;
  searchTerm = signal('');
  currentPage = signal(0);
  pageSize = signal(10);
  sortColumn = signal('');
  sortDirection = signal<'asc' | 'desc'>('asc');

  filteredPersons = computed(() => {
    const search = this.searchTerm().toLowerCase().trim();
    return this.persons().filter(
      (person) =>
        person.email.toLowerCase().includes(search) ||
        person.firstname.toLowerCase().includes(search) ||
        person.lastname.toLowerCase().includes(search)
    );
  });

  displayedPersons = computed(() => {
    const sorted = [...this.filteredPersons()];

    if (this.sortColumn()) {
      sorted.sort((a, b) => {
        const columnKey = this.sortColumn() as keyof Person;
        const direction = this.sortDirection() === 'asc' ? 1 : -1;
        return a[columnKey] > b[columnKey] ? direction : -direction;
      });
    }

    const startIndex = this.currentPage() * this.pageSize();
    return sorted.slice(startIndex, startIndex + this.pageSize());
  });

  constructor() {
    toSignal(this.personService.getPersons());
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchTerm.set(filterValue);
    this.currentPage.set(0);
  }

  sortData(sort: Sort): void {
    this.sortColumn.set(sort.active);
    this.sortDirection.set(sort.direction as 'asc' | 'desc');
  }

  onPageChange(event: PageEvent): void {
    this.currentPage.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }
}
