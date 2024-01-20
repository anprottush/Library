import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard-module/dashboard/dashboard.component';
import { PagesLoginComponent } from './pages/auth-module/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/auth-module/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';

const routes: Routes = [
  {
    path: 'book-issue',
    loadChildren: () =>
      import('./modules/bookissue-module/bookissue-module.module').then(
        (m) => m.BookIssueModuleModule
      ),
  },
  {
    path: 'member',
    loadChildren: () =>
      import('./modules/member-module/member-module.module').then(
        (m) => m.MemberModuleModule
      ),
  },
  {
    path: 'ebook',
    loadChildren: () =>
      import('./modules/ebook-module/ebook-module.module').then(
        (m) => m.EbookModuleModule
      ),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./modules/customer-module/customer-module.module').then(
        (m) => m.CustomerModuleModule
      ),
  },

  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
  // { path: 'book-issue', component: BookIssueComponent },
  // { path: 'create', component: BookIssueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
