import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'index',
        // loadChildren: () => import('./fecthuser/fecthuser').then(m => m.Fecthuser),
        // pathMatch:'full',
        loadComponent: () => import('./fecthuser/fecthuser').then(m => m.Fecthuser),
        canActivate: ['AuthGuard'],
        // canActivate: ['AuthGuard'],
    },
    {
        path:'login',
        loadComponent: () => import('./login/login').then(m => m.Login)
    },
    {
        path:'adduser',
        loadComponent: () => import('./adduser/adduser').then(m => m.Adduser)
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:'login',
        pathMatch:'full'
    }
];
