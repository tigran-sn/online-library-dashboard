import { Component, inject, Inject } from '@angular/core';

import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

interface DialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
})
export class ConfirmDialogComponent {
  dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
  data: DialogData =
    inject<DialogData>(MAT_DIALOG_DATA, { optional: true }) ||
    ({} as DialogData);
}
