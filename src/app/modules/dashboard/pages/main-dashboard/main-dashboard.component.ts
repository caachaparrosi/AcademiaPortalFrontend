import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../../../src/app/shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../../../../../src/app/shared/components/sidebar/sidebar.component';
import { ApiService } from '../../../../../../src/app/services/api.service';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent],
  templateUrl: './main-dashboard.component.html'
})
export class MainDashboardComponent implements OnInit {
  userName = 'Usuario';
  userEmail = '';
  userRole = localStorage.getItem('userRole') || '';
  dataList: any[] = [];
  programs: any[] = []; // Lista de programas disponibles

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadUserData();
    this.loadPrograms();
  }

  loadUserData() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.apiService.getUserById(userId).subscribe((user) => {
        this.userName = user.name;
        this.userEmail = user.email;
        this.userRole = user.role;
        localStorage.setItem('userRole', user.role); // Asegurar que el rol está almacenado correctamente
        this.loadUserRelatedData();
      });
    }
  }

  loadUserRelatedData() {
    if (this.userRole === 'Student') {
      this.apiService.getUserCourses().subscribe((courses) => {
        this.dataList = courses;
      });
    } else if (this.userRole === 'Teacher') {
      this.apiService.getTeacherStudents().subscribe((students) => {
        this.dataList = students;
      });
    }
  }

  loadPrograms() {
    this.apiService.getPrograms().subscribe((programs) => {
      this.programs = programs;
    });
  }
}
