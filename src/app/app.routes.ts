import { Routes } from '@angular/router';
import { SecuredComponent } from './page/secured/secured.component';
import { authGuard } from './core/auth/auth.guard';
import { NotsecuredComponent } from './page/notsecured/notsecured.component';
import { LoginComponent } from './page/login/login.component';
import { loginGuard } from './core/login/login.guard';

export const routes: Routes = [
    {
        path: 'secured',
        component: SecuredComponent,
        canActivate: [authGuard]
    },
    {
        path: 'notsecured',
        component: NotsecuredComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [loginGuard],
    },
];
