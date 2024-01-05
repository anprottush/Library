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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmenuComponent,
    SidebarComponent,
    FooterComponent,

    UsersProfileComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ConfirmDialogService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
