import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noWhitespaceValidator(
  minLength: number = 0
): (control: AbstractControl) => ValidationErrors | null {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null || control.value === undefined) {
      return null;
    }

    const trimmedValue = control.value.trim();

    if (trimmedValue.length === 0) {
      return { whitespace: true };
    }

    if (minLength > 0 && trimmedValue.length < minLength) {
      return {
        minlength: {
          requiredLength: minLength,
          actualLength: trimmedValue.length,
        },
      };
    }

    return null;
  };
}
