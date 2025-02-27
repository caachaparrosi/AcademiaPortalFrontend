import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-modal-role',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-role.component.html',
  styleUrls: ['./modal-role.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ModalRoleComponent {
  @Output() roleSelected = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  selectRole(role: string) {
    this.roleSelected.emit(role);
  }

  closeModal() {
    this.close.emit();
  }
}
