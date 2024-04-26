import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import {MatListModule} from '@angular/material/list'
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatIconModule,MatToolbarModule,MatSidenavModule,RouterLink,MatListModule,RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
