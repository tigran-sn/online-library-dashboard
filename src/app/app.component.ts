import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';

import { filter, map } from 'rxjs';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { AuthService } from './core/services/auth.service';
import { LoaderComponent } from './shared/components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NavBarComponent,
    LoaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected authService = inject(AuthService);

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  pageTitle = signal('');

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute.firstChild;
          while (route?.firstChild) {
            route = route.firstChild;
          }
          return route?.snapshot.data['title'] || 'Default Title';
        })
      )
      .subscribe((title) => {
        this.pageTitle.set(title);
      });
  }

  logout(): void {
    this.authService.logout();
  }
}
