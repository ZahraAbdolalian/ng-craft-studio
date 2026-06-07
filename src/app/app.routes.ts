import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./layout/app-shell/app-shell').then(m => m.AppShell)
    }
];
