import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, MatSidenavModule, MatListModule, MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {}
