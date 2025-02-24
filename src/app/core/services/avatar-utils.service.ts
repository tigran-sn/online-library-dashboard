import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AvatarUtilsService {
  getInitials(
    firstName: string | null | undefined,
    lastName: string | null | undefined,
    fallbackChar: string = '?'
  ): string {
    const firstInitial =
      firstName && firstName.length > 0 ? firstName.charAt(0) : '';
    const lastInitial =
      lastName && lastName.length > 0 ? lastName.charAt(0) : '';

    if (!firstInitial && !lastInitial) {
      return fallbackChar;
    }

    return `${firstInitial}${lastInitial}`.toUpperCase();
  }
}
