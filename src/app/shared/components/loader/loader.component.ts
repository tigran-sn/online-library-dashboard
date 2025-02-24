import { Component, inject } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoaderService } from '../../../core/services/loader.service';

@Component({
  selector: 'app-loader',
  imports: [MatProgressSpinnerModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  public loaderService = inject(LoaderService);
}
