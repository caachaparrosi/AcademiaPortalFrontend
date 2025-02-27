import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../../../../../src/app/services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  role: string = '';

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.role = this.route.snapshot.paramMap.get('role') || '';
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = { ...this.registerForm.value, role: this.role };
      this.apiService.registerUser(userData).subscribe((response) => {
        localStorage.setItem('userId', response.id);
        localStorage.setItem('userRole', response.role); // Guardamos el rol
        alert('Registro exitoso');
        this.router.navigate(['/dashboard']);
      }, () => {
        alert('Error en el registro');
      });
    }
  }
  

  goBack() {
    this.router.navigate(['/']);
  }
}
