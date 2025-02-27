import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/register`, data);
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}`);
  }

  getUserCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/courses/user`);
  }

  getTeacherStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/teachers/students`);
  }

  getPrograms(): Observable<any> {
    return this.http.get(`${this.baseUrl}/programs`);
  }
}
