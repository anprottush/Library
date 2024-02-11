import { Component, ElementRef, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'library';
  constructor(@Inject(ElementRef) private elementRef: ElementRef, public router: Router) { }

  ngOnInit() {


  }

  public loadingHeaderComponent(): any {

    if (!(this.router.url === '/dashboard' || this.router.url === '/bookissue' ||
      this.router.url === '/bookissue/add' || this.router.url.includes('/bookissue/edit/') ||
      this.router.url === '/member' || this.router.url === '/member/add' || this.router.url.includes('/member/edit/') ||
      this.router.url === '/ebook' || this.router.url === '/ebook/add' || this.router.url === '/requestbook' ||
      this.router.url === '/requestbook/add' || this.router.url.includes('/requestbook/edit/') || this.router.url === '/income' ||
      this.router.url === '/income/add' || this.router.url.includes('/income/edit/') || this.router.url === '/expense' ||
      this.router.url === '/expense/add' || this.router.url.includes('/expense/edit/') ||
      this.router.url === '/admin-dashboard'  )) {
      return true;
    }

  }

  public loadingMainmenuComponent(): any {

    if (!(this.router.url === '/admin-dashboard' || this.router.url === '/pages-register' ||
      this.router.url === '/pages-login' || this.router.url === '/dashboard' || this.router.url === '/bookissue' ||
      this.router.url === '/bookissue/add' || this.router.url.includes('/bookissue/edit/') ||
      this.router.url === '/member' || this.router.url === '/member/add' || this.router.url.includes('/member/edit/') ||
      this.router.url === '/ebook' || this.router.url === '/ebook/add' || this.router.url === '/requestbook' ||
      this.router.url === '/requestbook/add' || this.router.url.includes('/requestbook/edit/') || this.router.url === '/income' ||
      this.router.url === '/income/add' || this.router.url.includes('/income/edit/') || this.router.url === '/expense' ||
      this.router.url === '/expense/add' || this.router.url.includes('/expense/edit/')  )) {
      return true;
    }

  }

  public loadingDashboardComponent(): any {

    if (!(this.router.url === '/' || this.router.url === '/pages-register' ||
      this.router.url === '/pages-login' || this.router.url === '/admin-dashboard'  )) {
      return true;
    }

  }

  public loadingMainComponent(): any {

    if (!(this.router.url === '/dashboard' || this.router.url === '/bookissue' ||
      this.router.url === '/bookissue/add' || this.router.url.includes('/bookissue/edit/') ||
      this.router.url === '/member' || this.router.url === '/member/add' || this.router.url.includes('/member/edit/') ||
      this.router.url === '/ebook' || this.router.url === '/ebook/add' || this.router.url === '/ebook/add' ||
      this.router.url === '/requestbook' || this.router.url === '/requestbook/add' || this.router.url.includes('/requestbook/edit/') ||
      this.router.url === '/income' || this.router.url === '/income/add' || this.router.url.includes('/income/edit/') || this.router.url === '/expense' ||
      this.router.url === '/expense/add' || this.router.url.includes('/expense/edit/')  )) {
      return true;
    }

  }


  public loadingFooterComponent(): any {

    if (!(this.router.url === '/dashboard' || this.router.url === '/bookissue' ||
      this.router.url === '/bookissue/add' || this.router.url.includes('/bookissue/edit/') ||
      this.router.url === '/member' || this.router.url === '/member/add' || this.router.url.includes('/member/edit/') ||
      this.router.url === '/ebook' || this.router.url === '/ebook/add' || this.router.url === '/ebook/add' ||
      this.router.url === '/requestbook' || this.router.url === '/requestbook/add' || this.router.url.includes('/requestbook/edit/') ||
      this.router.url === '/income' || this.router.url === '/income/add' || this.router.url.includes('/income/edit/') || this.router.url === '/expense' ||
      this.router.url === '/expense/add' || this.router.url.includes('/expense/edit/') ||
      this.router.url === '/admin-dashboard'  )) {
      return true;
    }

  }




}
