import { Routes } from '@angular/router';
import { AppShell } from './layout/app-shell/app-shell';

export const routes: Routes = [
    {
        path: '',
        component: AppShell,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'generator/button'
            },
            {
                path: 'generator',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'button'
                    },
                    {
                        path: 'button',
                        title: 'Button Generator | NgCraft Studio',
                        loadComponent: () =>
                            import('./features/generator/button-generator/button-generator').then(
                                (m) => m.ButtonGenerator,
                            ),
                    }
                ]
            }
        ]
    }
];
