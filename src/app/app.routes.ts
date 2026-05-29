import { Routes } from '@angular/router';
import { AppShell } from '@core/layout/app-shell/app-shell';

export const routes: Routes = [
    {
        path: '',
        component: AppShell,
        pathMatch: 'full',
        loadComponent: () => import('@features/home/home').then(m => m.Home)
    }
];
