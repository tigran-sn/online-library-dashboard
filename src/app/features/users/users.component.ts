import { Component, OnInit, inject } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { UserService } from '../../core/services/user.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { User } from '../../shared/models/user.model';
import { InitialsAvatarDirective } from '../../shared/directives/initials-avatar.directive';
import { AvatarUtilsService } from '../../core/services';

@Component({
  selector: 'app-users',
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    InitialsAvatarDirective,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  private readonly userService = inject(UserService);
  private readonly dialog = inject(MatDialog);
  protected readonly avatarUtils = inject(AvatarUtilsService);

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

  deleteUser(user: User): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirm Delete',
        message: `Are you sure you want to delete user ${user.first_name} ${user.last_name}?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.deleteUser(user.id!).subscribe();
      }
    });
  }
}
