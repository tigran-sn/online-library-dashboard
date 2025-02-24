import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { User } from '../../../shared/models/user.model';
import { noWhitespaceValidator } from '../../../shared/validators/no-whitespace.validator';

@Component({
  selector: 'app-user-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss',
})
export class UserDialogComponent {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<UserDialogComponent>);

  data: User =
    inject<User>(MAT_DIALOG_DATA, { optional: true }) || ({} as User);

  userForm: FormGroup;

  constructor() {
    this.userForm = this.fb.group({
      id: [this.data?.id],
      first_name: [
        this.data?.first_name || '',
        [Validators.required, noWhitespaceValidator(2)],
      ],
      last_name: [
        this.data?.last_name || '',
        [Validators.required, noWhitespaceValidator(2)],
      ],
      email: [
        this.data?.email || '',
        [Validators.required, Validators.email, noWhitespaceValidator()],
      ],
      avatar: [this.data?.avatar || '', []],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      // Trim whitespace from form values before submitting
      const formValue = this.userForm.value;
      const trimmedValue = {
        ...formValue,
        first_name: formValue.first_name.trim(),
        last_name: formValue.last_name.trim(),
        email: formValue.email.trim(),
      };
      this.dialogRef.close(trimmedValue);
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.userForm.get(controlName);

    if (control?.touched) {
      if (control.hasError('required')) {
        return `${controlName.replace('_', ' ')} is required`;
      }
      if (control.hasError('whitespace')) {
        return `${controlName.replace('_', ' ')} cannot be empty`;
      }
      if (control.hasError('minlength')) {
        return `${controlName.replace('_', ' ')} must be at least 2 characters`;
      }
      if (control.hasError('email')) {
        return 'Please enter a valid email address';
      }
    }
    return '';
  }
}
