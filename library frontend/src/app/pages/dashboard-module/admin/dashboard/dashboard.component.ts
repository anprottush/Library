import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isSidebarCollapsed = false;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
  sidebarToggle()
  {
    //toggle sidebar function
    // this.document.body.classList.toggle('toggle-sidebar');
      this.toggleSidebar();
  }


  toggleSidebar() {
    console.log("true")
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
