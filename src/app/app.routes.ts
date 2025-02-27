import { Routes } from '@angular/router';
import { provideRouter, withComponentInputBinding } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./modules/home/pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'register/:role', loadComponent: () => import('./modules/auth/pages/register/register.component').then(m => m.RegisterComponent) },
  { path: 'dashboard', loadComponent: () => import('./modules/dashboard/pages/main-dashboard/main-dashboard.component').then(m => m.MainDashboardComponent) }
];

export const appRouting = [provideRouter(routes, withComponentInputBinding())];
