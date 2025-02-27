import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  showDropdown = false;
  userName = 'Usuario';

  constructor(private router: Router) {}

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToEditProfile() {
    this.router.navigate(['/edit-profile']);
  }

  logout() {
    this.router.navigate(['/home']);
  }
}
