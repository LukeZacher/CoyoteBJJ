import { Routes } from '@angular/router';
import { MarketingLayout } from './core/layout/marketing-layout/marketing-layout';
import { AuthLayout } from '@core/layout/auth-layout/auth-layout';
import { Home } from './features/marketing/home/home';
import { Login } from './features/auth/login/login';
import { ForgotPassword } from './features/auth/forgot-password/forgot-password';

export const routes: Routes = [
  {
    path: '',
    component: MarketingLayout,
    children: [{ path: '', component: Home }],
  },
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'login', component: Login },
      { path: 'forgot-password', component: ForgotPassword },
    ],
  },
];
