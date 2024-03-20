import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) { }

  isLoggedIn(){
    return localStorage.getItem('applicant_access_token') !== null;
  }

  logout() {
    localStorage.removeItem('applicant_email');
    localStorage.removeItem('applicant_access_token');
    localStorage.removeItem('applicant_refresh_token');

    this.router.navigate(['/login']);
  }
}
