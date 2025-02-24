import {
  Directive,
  ElementRef,
  Renderer2,
  input,
  effect,
  inject,
} from '@angular/core';
import { AvatarUtilsService } from '../../core/services';

@Directive({
  selector: 'img[appInitialsAvatar]',
  standalone: true,
  host: {
    '(error)': 'onImageError()',
  },
})
export class InitialsAvatarDirective {
  private readonly el = inject(ElementRef<HTMLImageElement>);
  private readonly renderer = inject(Renderer2);
  private readonly avatarUtils = inject(AvatarUtilsService);

  firstName = input<string | undefined | null>(undefined);
  lastName = input<string | undefined | null>(undefined);
  fallbackChar = input<string>('?');

  constructor() {
    effect(() => {
      const initials = this.avatarUtils.getInitials(
        this.firstName(),
        this.lastName(),
        this.fallbackChar()
      );

      if (!this.el.nativeElement.alt) {
        this.renderer.setAttribute(this.el.nativeElement, 'alt', initials);
      }
    });
  }

  onImageError(): void {
    const imgElement = this.el.nativeElement;
    const parent = imgElement.parentElement;

    if (parent) {
      const initials =
        imgElement.alt ||
        this.avatarUtils.getInitials(
          this.firstName(),
          this.lastName(),
          this.fallbackChar()
        );

      const div = this.renderer.createElement('div');
      this.renderer.addClass(div, 'avatar-circle');
      this.renderer.setProperty(div, 'textContent', initials);

      this.renderer.insertBefore(parent, div, imgElement);
      this.renderer.removeChild(parent, imgElement);
    }
  }
}
