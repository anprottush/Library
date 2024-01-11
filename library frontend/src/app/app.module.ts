import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { UsersProfileComponent } from './pages/users-profile/users-profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth/AuthInterceptor ';
import { HttpClientModule } from '@angular/common/http';

import { ConfirmDialogComponent } from './layouts/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from './core/services/confirm-dialog.service';
import { MainmenuComponent } from './layouts/mainmenu/mainmenu.component';
import { AuthModuleModule } from './pages/auth-module/auth-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesLoginComponent } from './pages/auth-module/pages-login/pages-login.component';
import { PagesRegisterComponent } from './pages/auth-module/pages-register/pages-register.component';
import { DashboardComponent } from './pages/dashboard-module/admin/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmenuComponent,
    SidebarComponent,
    FooterComponent,
    PagesLoginComponent,
    DashboardComponent,
    PagesRegisterComponent,
    UsersProfileComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModuleModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ConfirmDialogService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
