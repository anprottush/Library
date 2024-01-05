import { Component, ElementRef, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';
constructor(@Inject(ElementRef) private elementRef: ElementRef, public _router: Router) { }

ngOnInit() {
    
  }
}
