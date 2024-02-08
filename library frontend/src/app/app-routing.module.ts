import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard-module/dashboard/dashboard.component';
import { PagesLoginComponent } from './pages/auth-module/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/auth-module/pages-register/pages-register.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { ConfirmDialogComponent } from './layouts/confirm-dialog/confirm-dialog.component';
import { AdminDashboardComponent } from './pages/dashboard-module/admin/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: 'bookissue',
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
    path: 'book',
    loadChildren: () =>
      import('./modules/books-module/book-module/book-module.module').then(
        (m) => m.BookModuleModule
      ),
  },
  {
    path: 'rack',
    loadChildren: () =>
      import('./modules/books-module/rack-module/rack-module.module').then(
        (m) => m.RackModuleModule
      ),
  },
  {
    path: 'bookcategory',
    loadChildren: () =>
      import('./modules/books-module/bookcategory-module/bookcategory-module.module').then(
        (m) => m.BookCategoryModuleModule
      ),
  },
  {
    path: 'bookbarcode',
    loadChildren: () =>
    import('./modules/books-module/bookbarcode-module/bookbarcode-module.module').then(
      (m) => m.BookBarcodeModuleModule
      ),
  },
  {
    path: 'requestbook',
    loadChildren: () =>
      import('./modules/requestbook-module/requestbook-module.module').then(
        (m) => m.RequestBookModuleModule
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
    import('./modules/storemanagement-module/order-module/order-module.module').then(
      (m) => m.OrderModuleModule
      ),
  },
  {
    path: 'storebook',
    loadChildren: () =>
    import('./modules/storemanagement-module/storebook-module/storebook-module.module').then(
      (m) => m.StoreBookModuleModule
      ),
  },
  {
    path: 'storebookcategory',
    loadChildren: () =>
    import('./modules/storemanagement-module/storebookcategory-module/storebookcategory-module.module').then(
      (m) => m.StoreBookCategoryModuleModule
      ),
  },
  {
    path: 'email',
    loadChildren: () =>
      import('./modules/email-module/email-module.module').then(
        (m) => m.EmailModuleModule
      ),
  },
  {
    path: 'income',
    loadChildren: () =>
      import('./modules/account-module/income-module/income-module.module').then(
        (m) => m.IncomeModuleModule
      ),
  },
  {
    path: 'expense',
    loadChildren: () =>
      import('./modules/account-module/expense-module/expense-module.module').then(
        (m) => m.ExpenseModuleModule
      ),
  },







  {
    path: 'customer',
    loadChildren: () =>
      import('./modules/customer-module/customer-module.module').then(
        (m) => m.CustomerModuleModule
      ),
  },

   { path: 'dashboard', component: DashboardComponent },
   { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'pages-login', component: PagesLoginComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'user-profile', component: UsersProfileComponent },
   //{ path: 'confirm-dialog', component: ConfirmDialogComponent },
  // { path: 'create', component: BookIssueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
