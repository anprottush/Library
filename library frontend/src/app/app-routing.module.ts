import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard-module/dashboard/dashboard.component';
import { PagesLoginComponent } from './pages/auth-module/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/auth-module/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
const routes: Routes = [
{
    path: 'cart',
    loadChildren: () =>
      import('./modules/cart-module/cart-module.module').then(
        (m) => m.CartModuleModule
      ),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./modules/customer-module/customer-module.module').then(
        (m) => m.CustomerModuleModule
      ),
  },

// { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
{ path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
