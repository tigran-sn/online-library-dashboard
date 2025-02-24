import { Component, inject, signal } from '@angular/core';
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
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NavBarComponent,
    LoaderComponent,
    HeaderComponent,
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
