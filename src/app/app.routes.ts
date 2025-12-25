import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
    { path: 'users', loadComponent: () => import('./pages/users/users').then(m => m.Users) },
    { path: 'parents', loadComponent: () => import('./pages/parent/parent').then(m => m.Parent) },
    { path: 'checkbox', loadComponent: () => import('./pages/custom-checkbox/custom-checkbox').then(m => m.CustomCheckbox) },
    { path: 'cart', loadComponent: () => import('./pages/cart-display/cart-display').then(m => m.CartDisplay) },
    { path: 'query-elements', loadComponent: () => import('./pages/query-elements/query-elements').then(m => m.QueryElements) },
];
