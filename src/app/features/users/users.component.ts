import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { UserService } from '../../core/services/user.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-users',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private userService = inject(UserService);
  private dialog = inject(MatDialog);

  users = this.userService.users;
  displayedColumns: string[] = [
    'avatar',
    'first_name',
    'last_name',
    'email',
    'actions',
  ];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe();
  }

  openUserDialog(user?: User): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '400px',
      data: user || {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.id) {
          this.userService.updateUser(result).subscribe();
        } else {
          this.userService.createUser(result).subscribe();
        }
      }
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe();
  }
}
