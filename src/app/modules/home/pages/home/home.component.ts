import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalRoleComponent } from '../../../../shared/components/modal-role/modal-role.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ModalRoleComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showModal = false;

  constructor(private router: Router) {}

  navigateToRegister(role: string) {
    this.router.navigate(['/register', role]);
  }
}
